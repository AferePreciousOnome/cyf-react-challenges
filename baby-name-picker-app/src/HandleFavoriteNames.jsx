import PropTypes from "prop-types";
import "./HandleFavoriteNames.css";
function HandleFavoriteNames({ favorites, toggleFavorite }) {
  return (
    <>
      {favorites.length === 0 ? (
        <h2>Favorites: Click Some Names To Add To Your Shortlist...</h2>
      ) : (
        <h2>
          Favorites:
          {favorites.map((baby) => (
            <span
              key={baby.id}
              className={baby.sex === "f" ? "female" : "male"}
              onClick={() => toggleFavorite(baby)}
              style={{ cursor: "pointer" }}
            >
              {baby.name}
            </span>
          ))}
        </h2>
      )}
    </>
  );
}
HandleFavoriteNames.propTypes = {
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default HandleFavoriteNames;
