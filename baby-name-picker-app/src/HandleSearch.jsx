import "./HandleSearch.css";
import PropTypes from "prop-types";
function HandleSearch({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search For Names...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
    </>
  );
}
HandleSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default HandleSearch;
