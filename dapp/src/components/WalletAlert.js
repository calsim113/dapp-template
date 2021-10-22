import React from "react";
import Alert from "react-bootstrap/Alert";

export default function WalletAlert(props) {
  const { walletConnectionError } = props;

  if (walletConnectionError == "info") {
    return (
      <div className="text-center">
        <Alert variant="info">
          <Alert.Heading>Connect your wallet</Alert.Heading>
        </Alert>
      </div>
    );
  } else if (walletConnectionError == "disconnected") {
    return (
      <div className="text-center">
        <Alert variant="danger">
          <Alert.Heading>Wallet disconnected</Alert.Heading>
        </Alert>
      </div>
    );
  } else if (walletConnectionError == "4001") {
    return (
      <div className="text-center">
        <Alert variant="danger">
          <Alert.Heading>Connection declined</Alert.Heading>
          {/* <p>Click on your MetaMask extension to connect</p> */}
        </Alert>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <Alert variant="warning">
          <Alert.Heading>Connection pending</Alert.Heading>
          <p>Click on your MetaMask extension to connect</p>
        </Alert>
      </div>
    );
  }
}
