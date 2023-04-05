import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";

//INTERNAL IMPORT
import Style from "./Hero.module.css";
import StyleWin from "../GuessBar/GuessBar.module.css";
import coins from "../GuessBar/CoinStatsIndex";
import {
  OptionsBar,
  GuessBar,
  Dropdown,
  HelperBox,
  Footer,
} from "../componentsindex";

//--IMPORT FROM SMART CONTRACT
import { CryrdleContext } from "../../Context/CryrdleContext";

const COINS_URL = "http://localhost:3999/api/v1/coins";

// var answer = coins['LTC']

const Hero = () => {
  // smart contract context functions
  const { connectWallet, joinTodaysCryrdle } = useContext(CryrdleContext);

  // hard coded data
  const CATEGORIES = [
    "symbol",
    "name",
    "category",
    "cmc_rank",
    "marketCap",
    "price",
    "date_added",
    // shared tags? if guess <tag> is in <coin> tan
  ];

  // display states
  const [helper, setHelper] = useState(true);
  const [winScreen, setWinScreen] = useState(false); // show win screen

  // guess/game states
  const [coinsList, setCoinsList] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [isPaidToday, setPaidToday] = useState(false); // check user paid today on chain
  const [isWinGame, setisWinGame] = useState(false); // show win screen

  useEffect(() => {
    Axios.get(COINS_URL).then((res) => {
      setCoinsList(res.data.data);
      console.log("coinList:", res.data.data);
    });
  }, []);

  const handleParticipationPayment = async () => {
    try {
      var payParticipationFee = await joinTodaysCryrdle();
      if (payParticipationFee) {
        setPaidToday(true); // TODO  read from SC in order to change this
        // TODO: MAKE PATCH HTTP REQ HERE ADDING TODAY'S DATE TO USER'S PARTICIPATION DATES IN BACKEND, ALLOWING USER TO MAKE GUESSES
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectedOption = (selectedOption) => {
    setGuesses([...guesses, guesses.length + 1]);
    console.log(guesses);
  };
  const handleCheckWin = (returnedStatus) => {
    if (returnedStatus) {
      setisWinGame(true);
      setWinScreen(true);
    }
  };

  return (
    <div className={Style.hero}>
      <div className={Style.hero_box}>
        {/* if winScreen, show win screen */}
        {winScreen && (
          <div className={Style.winScreen}>
            <div className={Style.winScreen_box}>
              <div className={Style.winScreen_btn_X}>
                <GoX onClick={() => setWinScreen(false)} />
              </div>
              <div className={Style.winScreen_box_congrats}>
                <h1>Congratulations!</h1>
                <h3>You guessed Litecoin!</h3>
                <p>You took 2 guesses!</p>
                <p>You took 3 minutes!</p>
              </div>

              <div className={Style.winScreen_box_submit_win}>
                <button>Submit Win</button>
              </div>
              <div className={Style.winScreen_box_coin_info}>
                <div className={StyleWin.guessBar_box_guesses}>
                  {coins[guesses.slice(-1)].map((el, i) => (
                    <div key={i} className={StyleWin.guessBar_correct}>
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={Style.winScreen_box_LB}>
                <h3>Today's Leaderboard</h3>

                {/* replace this with mapping 3 from leaderboard */}
                <div className={Style.winScreen_box_LB_list}>
                  <div className={Style.winScreen_box_LB_list_item}>
                    <p>1: John Doe</p>
                    <p>Guesses: 1, Time: 4s</p>
                  </div>
                  <div className={Style.winScreen_box_LB_list_item}>
                    <p>2: John Smith</p>
                    <p>Guesses: 3, Time: 16m</p>
                  </div>
                  <div className={Style.winScreen_box_LB_list_item}>
                    <p>3: Daniel Danielson</p>
                    <p>Guesses: 3, Time: 18m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Icons */}
        <div className={Style.hero_box_optionsBar}>
          <OptionsBar />
        </div>

        {/* Welcome message */}
        <div className={Style.hero_box_message}>
          <h2>Guess the coin of the day!</h2>
          <p>Type any coin to begin.</p>
        </div>

        {/* ***COULD ADD CONDITIONAL RENDER HERE IF ALREADY PLAYER TODAY*** */}

        {/* Show connect wallet button */}
        {/* OR show guess dropdown */}
        {/* OR show WIN screen */}

        {!isWinGame ? (
          // show guess dropdown and take guesses
          <div className={Style.hero_box_dropdown}>
            {isPaidToday ? (
              <Dropdown
                onGuessMade={handleSelectedOption}
                checkWin={handleCheckWin}
                coinsList={coinsList}
              />
            ) : (
              <div className={Style.hero_box_connect}>
                <button
                  // className={
                  //     Style.hero_box_connect_btn_pay
                  // }
                  onClick={() => setPaidToday(true)}
                >
                  (only devs)
                </button>

                <button
                  className={Style.hero_box_pay_btn}
                  onClick={() => {
                    handleParticipationPayment();
                  }}
                >
                  Click to Pay to Play!
                </button>
              </div>
            )}
          </div>
        ) : (
          // show win screen
          <div className={Style.hero_box_connect}>
            <button
              className={Style.hero_box_connect_btn}
              onClick={() => setWinScreen(true)}
            >
              Show Win Screen
            </button>
          </div>
        )}
      </div>

      {/* Guesses reveal section -- HEADERS */}
      <div className={Style.hero_guessBar_headers_box}>
        <div className={Style.hero_guessBar_headers}>
          {CATEGORIES.map((el, i) => (
            <div key={i} className={Style.guessBar_guesses_header}>
              <span>{el}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Guesses reveal section -- for each guess */}
      <div className={Style.hero_guesses}>
        {guesses.map((el, i) => (
          <div key={i} className={Style.guessBar_guesses_info}>
            <GuessBar guess={el} />
          </div>
        ))}
      </div>

      {/* how to play helper */}
      {helper && (
        <div className={Style.hero_box_helperBox}>
          <div className={Style.hero_box_helperBox}>
            <HelperBox onClose={() => setHelper(false)} />
          </div>
        </div>
      )}

      {/* check if daily guess limit has been reached  */}
    </div>
  );
};

export default Hero;
