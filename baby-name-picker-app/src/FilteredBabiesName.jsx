import "./FilteredBabyNames.css";
import PropTypes from "prop-types";
function FilteredBabiesName({ genderFilter, handleGenderFilter }) {
  return (
    <>
      <div className="gender-filter">
        <button
          className={genderFilter === "all" ? "active" : ""}
          onClick={() => handleGenderFilter("all")}
        >
          <img
            src="https://img.icons8.com/plasticine/100/gender-neutral-user-group.png"
            alt="All"
          />
        </button>
        <button
          className={genderFilter === "male" ? "active" : ""}
          onClick={() => handleGenderFilter("male")}
        >
          <img src="https://img.icons8.com/doodle/48/boy.png" alt="Boys" />
        </button>
        <button
          className={genderFilter === "female" ? "active" : ""}
          onClick={() => handleGenderFilter("female")}
        >
          <img src="https://img.icons8.com/doodle/48/girl.png" alt="Girls" />
        </button>
      </div>
    </>
  );
}
FilteredBabiesName.propTypes = {
  genderFilter: PropTypes.string.isRequired,
  handleGenderFilter: PropTypes.func.isRequired,
};
export default FilteredBabiesName;
