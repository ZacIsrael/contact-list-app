import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // In a real application, this data would get fetched from the server
  const contacts = [
    {
      name: "Beyonce",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "b@beyonce.com",
    },
    {
      name: "Jack Bauer",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+987 654 321",
      email: "jack@nowhere.com",
    },
    {
      name: "Chuck Norris",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      phone: "+918 372 574",
      email: "gmail@chucknorris.com",
    },
  ];

  return (
    <>
      <div>
        <h1 className="heading">My Contacts</h1>
        {/* Creat a Card element for each contact */}
        {contacts.map((item, i) => (
          <Card
            key={i}
            contactName={item.name}
            imageURL={item.imgURL}
            phoneNumber={item.phone}
            email={item.email}
          />
        ))}
      </div>
    </>
  );
}

export default App;
