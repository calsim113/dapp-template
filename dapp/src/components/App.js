import React, { useEffect, useState } from "react";
import Web3 from "web3";

export default function App() {
  const rinkebyNetworkId = 4;
  const [account, setAccount] = useState();
  const [walletConnectionError, setWalletConnectionError] = useState("info");

  useEffect(() => {
    const connectToWeb3 = () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          if (!account) {
            handleAccountsRequested();
          } else {
            handleAccountsChanged();
          }
          handleContractSetter();
          handleContractSetter();
          handleEvent();
          return true;
        } catch (e) {
          return false;
        }
      }
    };
    connectToWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  if (account) {
    return (
      <div className="container" style={{ width: "650px" }}>
        <div className="row">
          <Header />
          <UserAccount account={account} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container" style={{ width: "650px" }}>
        <div className="row">
          <Header />
          <WalletAlert walletConnectionError={walletConnectionError} />
        </div>
      </div>
    );
  }

  function handleAccountsRequested() {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        setWalletConnectionError(error.code);
      });
  }

  function handleAccountsChanged() {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setAccount(undefined);
        setWalletConnectionError("disconnected");
      }
    });
  }

  function handleContractSetter(contractABI, setContract) {
    const web3Provider = new Web3(window.ethereum);
    const address = contractABI.networks[rinkebyNetworkId].address;
    const contract = new web3Provider.eth.Contract(contractABI.abi, address);
    setContract(contract);
  }

  function handleEvent(contract, setEvent) {
    contract.events
      .Sell({
        fromBlock: 0,
      })
      .on("data", (event) => setEvent(event));
  }
}
