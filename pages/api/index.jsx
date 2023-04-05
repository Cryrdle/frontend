// import { useState, useEffect } from 'react';
// import { ethers, BigNumber, Contract, Wallet } from 'ethers';

// import tokenJson from '../assets/MyToken.json';
// import { TransactionResponseDTO, ErrorMessageDTO } from '../dto';

// const enum API_URLS {
//   MY_TOKEN_ADDRESS = 'http://localhost:3000/my-token-contract-address',
//   TOKENIZED_BALLOT_ADDRESS = 'http://localhost:3000/tokenized-ballot-contract-address',
//   MINTING = 'http://localhost:3000/request-tokens',
//   DELEGATING = 'http://localhost:3000/delegate',
//   VOTING = 'http://localhost:3000/vote',
//   WINNING_PROPOSAL = 'http://localhost:3000/winning-proposal',
// }

// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }

// const App = () => {
//   const [blockNumber, setBlockNumber] = useState<number | string | undefined>(undefined);
//   const [provider, setProvider] = useState<ethers.providers.BaseProvider>(ethers.providers.getDefaultProvider('goerli'));
//   const [tokenContract, setTokenContract] = useState<Contract | undefined>(undefined);
//   const [totalSupply, setTotalSupply] = useState<number | undefined>(undefined);

//   const [myTokenContractAddress, setMyTokenContractAddress] = useState<string | undefined>(undefined);
//   const [tokenizedBallotContractAddress, setTokenizedBallotContractAddress] = useState<string | undefined>(undefined);

//   const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
//   const [userWallet, setUserWallet] = useState<Wallet | undefined>(undefined);
//   const [userAddress, setUserAddress] = useState<string | undefined>(undefined);
//   const [userETHBalance, setUserETHBalance] = useState<number | undefined>(undefined);
//   const [userTokenBalance, setUserTokenBalance] = useState<string | number | undefined>(undefined);

//   const [mintingInfo, setMintingInfo] = useState<TransactionResponseDTO | undefined>(undefined);
//   const [delegatingInfo, setDelegatingInfo] = useState<TransactionResponseDTO | undefined>(undefined);
//   const [votingInfo, setVotingInfo] = useState<TransactionResponseDTO | undefined>(undefined);
//   const [winningProposalInfo, setWinningProposalInfo] = useState<TransactionResponseDTO | undefined>(undefined);

//   const [mintingError, setMintingError] = useState<ErrorMessageDTO | undefined>(undefined);
//   const [delegatingError, setDelegatingError] = useState<ErrorMessageDTO | undefined>(undefined);
//   const [votingError, setVotingError] = useState<ErrorMessageDTO | undefined>(undefined);
//   const [winningProposalError, setWinningProposalError] = useState<ErrorMessageDTO | undefined>(undefined);

//   const [loadingMintingTxnInfo, setLoadingMintingTxnInfo] = useState<boolean>(false);
//   const [loadingDelegatingTxnInfo, setLoadingDelegatingTxnInfo] = useState<boolean>(false);
//   const [loadingVotingTxnInfo, setLoadingVotingTxnInfo] = useState<boolean>(false);
//   const [loadingWinningProposalTxnInfo, setLoadingWinningProposalTxnInfo] = useState<boolean>(false);

//   useEffect(() => {
//     const getMyTokenContractAddress = async () => {
//       const response = await fetch(API_URLS.MY_TOKEN_ADDRESS);
//       const data = await response.json();
//       setMyTokenContractAddress(data.result);
//       getTokenInfo();
//     }
//     getMyTokenContractAddress();
//   }, []);

//   useEffect(() => {
//     const getTokenizedBallotContractAddress = async () => {
//       const response = await fetch(API_URLS.TOKENIZED_BALLOT_ADDRESS);
//       const data = await response.json();
//       setTokenizedBallotContractAddress(data.result);
//     }
//     getTokenizedBallotContractAddress();
//   }, []);

//   const getTokenInfo = () => {
//     if (!myTokenContractAddress) return;
//     const { abi } = tokenJson;

//     const tokenContract = new Contract(
//       myTokenContractAddress,
//       abi,
//       userWallet ?? provider
//     );

//     tokenContract['totalSupply']().then((totalSupplyBN: BigNumber) => {
//       const totalSupplyString = ethers.utils.formatEther(totalSupplyBN);

//       const Home = () => {
//         // state variables and useEffect hooks go here
//         // ...

//         return (
//           <div>
//             {/* render the component's UI here */}
//             {/* ... */}
//           </div>
//         );
//       }

//       export default Home;
//       You can then reference this component in your app's pages/_app.tsx file, like so:

//       import type { AppProps } from 'next/app';
//       import Head from 'next/head';

//       function MyApp({ Component, pageProps }: AppProps) {
//         return (
//           <>
//             <Head>
//               <title>My App</title>
//             </Head>
//             <Component {...pageProps} />
//           </>
//         );
//       }

//       export default MyApp;
