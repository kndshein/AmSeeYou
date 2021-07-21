import React from "react";

const GenresList = ({ genres }) => {
  genres.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const classNameColor = (e) => {
    var className;
    switch (e) {
      case 28:
        className = "genre-action";
        break;
      case 12:
        className = "genre-adventure";
        break;
      case 35:
        className = "genre-comedy";
        break;
      case 18:
        className = "genre-drama";
        break;
      case 14:
        className = "genre-fantasy";
        break;
      case 878:
        className = "genre-science-fiction";
        break;
      case 53:
        className = "genre-thriller";
        break;
      default:
        className = "genre-none";
    }
    return className;
  };

  return (
    <div className="genres-list">
      {genres.map((element, index) => {
        return (
          <div className={`${classNameColor(element.id)}`} key={index}>
            {element.name}
          </div>
        );
      })}
    </div>
  );
};

export default GenresList;
