import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";

export default function Friend() {
  const [isLoding, setIsLoding] = useState(false);
  const [hasErorr, setHasErorr] = useState(false);
  const [friend, setFriend] = useState({});

  const getFriend = async () => {
    setIsLoding(true);

    try {
      const res = await fetch("https://www.randomuser.me/api?results=1");
      const data = await res.json();
      setFriend({
        first: data.results[0].name.first,
        last: data.results[0].name.last,
        address: data.results[0].location.street.name,
        country: data.results[0].location.country,
        emailAddress: data.results[0].email,
        phoneNumber: data.results[0].cell,
      });
      setIsLoding(false);
    } catch {
      setHasErorr(true);
      setIsLoding(false);
    }
  };

  const handleClick = () => {
    getFriend();
  };

  return (
    <div className="friend">
      <h1>Exercise 1: New friend on demand</h1>
      <Button onClick={handleClick} />
      {isLoding && <p>Loading please wait ....</p>}
      {hasErorr && <p>something is wrong</p>}
      {!hasErorr && (
        <FriendProfile
          first={friend.first}
          last={friend.last}
          address={friend.address}
          country={friend.country}
          emailAddress={friend.emailAddress}
          phoneNumber={friend.phoneNumber}
        />
      )}
    </div>
  );
}
