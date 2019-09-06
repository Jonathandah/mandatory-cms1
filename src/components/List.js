import React from "react";
import "../css/Authors.css";

function List(props) {
  console.log(props);
  const authors = props.authors.data.entries;
  return (
    <div className="List">
      <h1 className="List__title">Authors</h1>
      <ul className="List__list">
        {authors.map(i => {
          console.log(i);
          return (
            <li key={i._id} className="List__list__author">
              {i.Avatar === ""
                ? console.log("ingen bild")
                : (console.log(i.Avatar.path),
                  (
                    <img
                      className="List__list__author__avatar"
                      src={
                        "https://cockpit-mandatory-cms1.devspace.host/" +
                        i.Avatar.path
                      }
                      alt={"avatar"}
                    />
                  ))}
              <h2 className="List__list__author__name">{i.Author}</h2>
              <p className="List__list__author__info">{i.Description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
