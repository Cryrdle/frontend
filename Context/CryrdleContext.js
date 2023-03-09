import React, { useState, useEffect, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import Web3Modal from '../node_modules/web3modal'
import { ethers } from 'ethers'
import { create } from 'ipfs-http-client'
import axios from 'axios'

// INTERNAL IMPORTS
import { CryrdleAddress, CryrdleABI } from './constants'

const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID
const PROJECTSECRETEKEY = process.env.NEXT_PUBLIC_PROJECTSECRETEKEY
const SUBDOMAIN = process.env.NEXT_PUBLIC_SUBDOMAIN

//To Upload Image to IPFS
const projectId = PROJECTID
const projectSecretKey = PROJECTSECRETEKEY
const auth =
    'Basic ' +
    Buffer.from(projectId + ':' + projectSecretKey).toString('base64')
const subdomain = SUBDOMAIN

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
})

//--FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(CryrdleAddress, CryrdleABI, signerOrProvider)

//---CONNECTING WITH SMART CONTRACT
const connectToSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal() // library to making connection flows easy
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = fetchContract(signer)
        return contract
    } catch (error) {
        console.log('Something went wrong while connecting with contract')
        // console.log(error)
    }
}

export const CryrdleContext = React.createContext()

export const CryrdleProvider = ({ children }) => {
    //---use states
    const [contract, setContract] = useState(null)
    const [currentAccount, setCurrentAccount] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter()

    //--check if user is connected
    const checkIfUserIsConnected = async () => {
        try {
            if (!window.ethereum) return console.log('Install MetaMask!')

            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            }) // array of accounts provided by metamask
            if (accounts.length) {
                setCurrentAccount(accounts[0])
            } else {
                console.log('No account found')
            }

            console.log('accounts: ', accounts)
        } catch (error) {
            console.log(
                'Something went wrong while checking connecting to wallet'
            )
        }
    }

    useEffect(() => {
        checkIfUserIsConnected()
    }, [])

    //--click and connect wallet function
    const connectWallet = async () => {
        try {
            console.log('Connecting wallet...')
            if (!window.ethereum) return console.log('Install MetaMask!')

            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            }) // array of accounts provided by metamask
            console.log('Connected with: ', accounts[0])
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log('Something went wrong while connecting to wallet')
        }
    }

    //--payParticipationFee function
    const joinTodaysCryrdle = async () => {
        try {
            if (!window.ethereum) return console.log('Install MetaMask!')
            const contract = await connectToSmartContract()
            const participationFee = await getParticipationFee()
            const tx = await contract.joinCryrdle({
                value: participationFee,
            })
            await tx.wait()
            console.log('Joined Cryrdle')
            return true
        } catch (error) {
            console.log('Something went wrong while joining Cryrdle')
            return false
        }
    }

    //--getter functions
    const getParticipationFee = async () => {
        try {
            if (!window.ethereum) return console.log('Install MetaMask!')
            const contract = await connectToSmartContract()
            const participationFee = await contract.getParticipationFee()
            return participationFee
        } catch (error) {
            console.log(
                'Something went wrong while retrieving participation fee'
            )
        }
    }

    //cont...

    return (
        <CryrdleContext.Provider
            value={{
                checkIfUserIsConnected,
                connectWallet,
                currentAccount,
                joinTodaysCryrdle,
            }}
        >
            {children}
        </CryrdleContext.Provider>
    )
}
