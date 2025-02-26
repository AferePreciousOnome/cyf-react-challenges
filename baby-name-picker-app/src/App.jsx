import BabyName from "./BabyName";
import HandleSearch from "./HandleSearch";
import { useState } from "react";
import "./index.css";
import HandleFavoriteNames from "./HandleFavoriteNames";
import FilteredBabiesName from "./FilteredBabiesName";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [babiesName, setBabiesName] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [genderFilter, setGenderFilter] = useState("all");

  function toggleFavorite(baby) {
    if (favorites.some((fav) => fav.id === baby.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== baby.id));
      setBabiesName([...babiesName, baby]);
    } else {
      setFavorites([...favorites, baby]);
      setBabiesName(babiesName.filter((b) => b.id !== baby.id));
    }
  }

  function handleGenderFilter(filter) {
    setGenderFilter(filter);
  }
  const filteredNames = babiesName.filter((baby) => {
    const matchesSearch = baby.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGender =
      genderFilter === "all" ||
      (genderFilter === "male" && baby.sex === "m") ||
      (genderFilter === "female" && baby.sex === "f");

    return matchesSearch && matchesGender;
  });
  return (
    <>
      <div className="container">
        <div className="search-filter-container">
          <HandleSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilteredBabiesName
            genderFilter={genderFilter}
            handleGenderFilter={handleGenderFilter}
          />
        </div>

        <div>
          <HandleFavoriteNames
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
          <hr />
        </div>

        <div>
          <BabyName
            filteredNames={filteredNames}
            setBabiesName={setBabiesName}
            onNameClick={toggleFavorite}
          />
        </div>

        <hr />
      </div>
    </>
  );
}

export default App;
