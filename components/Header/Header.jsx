import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Axios from "axios";

// --INTERNAL IMPORTS
import Style from "./Header.module.css";
import images from "../../img";

const USERS_URL = "http://localhost:3999/api/v1/users";

//--IMPORT FROM SMART CONTRACT
import { CryrdleContext } from "../../Context/CryrdleContext";
import Link from "next/link";

const Header = () => {
  // CONTEXT
  let { currentAccount } = useContext(CryrdleContext);

  // --STATES
  const [isConnected, setConnected] = useState(false);

  // --FUNCTIONS
  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      setConnected(true); // << confirm this via SC
      isConnected ? checkExistingAccount_test() : null;
    } catch (error) {
      console.log(error);
    }
  };

  const checkExistingAccount_test = async () => {
    console.log("checkExistingAccount_test...");

    Axios.post(`${USERS_URL}/${currentAccount}`).then((response) => {
      console.log(response);
    });
    // format problem. Check format on Postman. Maybe use header instead of body
  };

  const checkExistingAccount = async () => {
    try {
      //check if account exists in backend
      const exists = await Axios.get(`${USERS_URL}/${currentAccount}`).then(
        (response) => {
          return response.data.data; // TODO get true of false
        }
      );

      if (exists) {
        // getAccountInfo();
      } else {
        // create account
        Axios.post(`${USERS_URL}/${currentAccount}`).then((response) => {
          console.log(response);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check if user is connected
  useEffect(() => {
    if (currentAccount) {
      setConnected(true);
    } else {
      setConnected(false);
      currentAccount = null;
    }
  }, [currentAccount]);

  // check if user has paid
  useEffect(() => {
    if (isConnected) {
      currentAccount;
    }
  }, [isConnected]);

  return (
    <div>
      <div className={Style.header}>
        <div className={Style.header_box}>
          <div className={Style.header_box_left_empty}></div>
          <div className={Style.header_box_middle_logo}>
            <Link href="/">
              <Image
                src={images.logo}
                alt="logo"
                width={300}
                className={Style.hero_box_logo_img}
              />
            </Link>
          </div>

          {!isConnected ? (
            <div className={Style.header_box_right_connect}>
              <button
                className={Style.header_box_right_connect_btn}
                onClick={() => {
                  handleConnectWallet();
                }}
              >
                Connect
              </button>
            </div>
          ) : (
            <div className={Style.header_box_right_connect}>
              <button
                className={Style.header_box_right_connect_btn_connected}
                onClick={() => {
                  checkExistingAccount_test();
                  //     handleDisconnectConnectWallet()
                }}
              >
                {/* Connected */}
                {currentAccount.slice(0, 5)}
                ...
                {currentAccount.slice(-5)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
