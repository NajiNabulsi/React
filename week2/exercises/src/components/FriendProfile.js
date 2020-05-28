import React from "react";

export default function FriendProfile({
  first,
  last,
  address,
  country,
  emailAddress,
  phoneNumber,
}) {
  // The first and last names, the address and country, the email address, and finally also the phone number
  return (
    <ul className="friendProfile">
      <li>
        {first} {last}
      </li>
      <li>{address} </li>
      <li>{country}</li>
      <li>{emailAddress}</li>
      <li>{phoneNumber}</li>
    </ul>
  );
}
