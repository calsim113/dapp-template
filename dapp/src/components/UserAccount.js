import React from "react";

export default function UserAccount(props) {
  const { account } = props;
  return (
    <div>
      <p className="text-center" style={{ fontSize: "10px", bottom: "0mm" }}>
        Your account: {account}
      </p>
    </div>
  );
}
