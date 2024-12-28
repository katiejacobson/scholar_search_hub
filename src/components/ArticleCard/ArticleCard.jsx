import "./ArticleCard.css";
import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function ArticleCard({ item, inProfile }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const addButtonClassName = `card__button-add-article ${
    isLoggedIn && !inProfile
      ? "card__button-add-article"
      : "card__button-add-article_hidden"
  }`;

  const deleteButtonClassName = `card__button-delete-article ${
    isLoggedIn && inProfile
      ? "card__button-delete-article"
      : "card__button-delete-article_hidden"
  }`;

  const logInfo = (info) => {
    console.log(info);
    console.log(inProfile);
  };

  return (
    <li className="card" key={item.id}>
      <div className="card__info-container">
        <p className="card__title">{item.title}</p>
        <p className="card__date">{item.createdDate}</p>
        <p className="card__authors">{item.authors}</p>
        <p className="card__abstract">{item.abstract}</p>
      </div>
      <div className="card__button-container">
        <a href={item.downloadUrl} target="_blank">
          <button
            className="card__button-open-article"
            type="button"
            id="card__open-article"
            aria-label="open"
          >
            Open Article
          </button>
        </a>
        <div>
          {!inProfile ? (
            <button
              className={addButtonClassName}
              type="button"
              id="card__add-article"
              aria-label="add"
            >
              Save Article
            </button>
          ) : (
            <button
              className={deleteButtonClassName}
              type="button"
              id="card__delete-article"
              aria-label="delete"
            >
              Delete Article
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default ArticleCard;
