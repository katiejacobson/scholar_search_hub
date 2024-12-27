import "./ArticleCard.css";
import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function ArticleCard({ item }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const addButtonClassName = `card__button-add-article ${
    isLoggedIn ? "card__button-add-article" : "card__button-add-article_hidden"
  }`;

  const logInfo = (info) => {
    console.log(info);
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
          <button
            className={addButtonClassName}
            type="button"
            id="card__add-article"
            aria-label="add"
          >
            Add Article
          </button>
        </a>
      </div>
    </li>
  );
}

export default ArticleCard;
