import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import restaurantList from "./utils/mockData";

function App() {
  const [cards, setCards] = useState(restaurantList);
  const [showTopRatedRes, setShowTopRatedRes] = useState(true);

  const filterTopRatedList = () => {
    setShowTopRatedRes(!showTopRatedRes);
    console.log(showTopRatedRes);
    if (showTopRatedRes) {
      const filteredList = cards.filter((e) => e.data.data.avgRating > 4);
      setCards(filteredList);
    } else {
      setCards(restaurantList);
    }
  };

  return (
    <div className="toofeel">
      <Navbar />
      <div className="search-sec">
        <input type="search" style={{ margin: "10px" }} />
        <button>Search</button>
        <button onClick={() => filterTopRatedList()}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="menu-sec">
        {cards.map((e) => {
          return <MenuCard resData={e.data.data} />;
        })}
      </div>
    </div>
  );
}

export default App;
