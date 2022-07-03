import "./App.css";
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  //state for keeping track of current connected account
  const [account, setAccount] = useState(null);

  useEffect(() => {
    //check if wallet is installed
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }

  if (account === null) {
    return (
      <div className="App">
        {isWalletInstalled ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <p>Install Metamask wallet</p>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <p>Connected as: </p>
      <span>{account}</span>
    </div>
  );
}

export default App;
