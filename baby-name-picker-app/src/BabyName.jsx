import { useEffect, useState } from "react";
import "./BabyName.css";

function BabyName() {
  const [babiesName, setBabiesName] = useState([]);

  useEffect(() => {
    fetch("./babyNamesData.json")
      .then((response) => response.json())
      .then((data) => setBabiesName(data));
  });

  return (
    <div className="container">
      {babiesName.map((baby, index) => (
        <p key={index} className={baby.sex === "f" ? "female" : "male"}>
          {baby.name}
        </p>
      ))}
    </div>
  );
}

export default BabyName;
