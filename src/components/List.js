import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

function List(props) {
  console.log(props);
  const authors = props.authors.data.entries;
  return (
    <div className="List">
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
                      src={
                        "https://cockpit-mandatory-cms1.devspace.host/" +
                        i.Avatar.path
                      }
                    ></img>
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
