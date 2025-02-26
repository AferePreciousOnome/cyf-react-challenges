import { useEffect } from "react";
import PropTypes from "prop-types";

import "./BabyName.css";

function BabyName({ filteredNames = [], setBabiesName, onNameClick }) {
  useEffect(() => {
    fetch("/babyNamesData.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        setBabiesName(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [setBabiesName]);

  return (
    <div className="baby-name-container">
      {filteredNames.length > 0 ? (
        filteredNames.map((baby) => (
          <button
            key={baby.id}
            className={baby.sex === "f" ? "female" : "male"}
            onClick={() => onNameClick(baby)}
          >
            {baby.name}
          </button>
        ))
      ) : (
        <p>No names found.</p>
      )}
    </div>
  );
}
BabyName.propTypes = {
  filteredNames: PropTypes.array.isRequired,
  setBabiesName: PropTypes.func.isRequired,
  onNameClick: PropTypes.func.isRequired,
};
export default BabyName;
