import React from "react";
import contacts from "../contacts";
import Card from "./Card";

console.log(contacts[0].name);
//beyonce
const beyonce = contacts.at(0);
const jack = contacts.at(1);
const chuck = contacts.at(2);

function App() {
  return (
    <div>
      <Card
        name={beyonce.name}
        img={beyonce.imgURL}
        number={beyonce.phone}
        email={beyonce.email}
      />
      <Card
        name={jack.name}
        img={jack.imgURL}
        number={jack.phone}
        email={jack.email}
      />
      <Card
        name={chuck.name}
        img={chuck.imgURL}
        number={chuck.phone}
        email={chuck.email}
      />
    </div>
  );
}

export default App;
