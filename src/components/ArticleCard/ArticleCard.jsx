import "./ArticleCard.css";
import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function ArticleCard({
  item,
  inProfile,
  addSavedArticle,
  deleteSavedArticle,
  confirmAction,
  recordAction,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const handleSave = () => {
    addSavedArticle(item);
    recordAction("Article Saved");
    confirmAction();
  };

  const handleDelete = () => {
    deleteSavedArticle(item.id);
    recordAction("Article Deleted");
    confirmAction();
  };

  const addButtonClassName = `card__button-add-article ${
    isLoggedIn && !inProfile
      ? "card__button-add-article"
      : "card__button-add-article card__button-add-article_hidden"
  }`;

  const deleteButtonClassName = `card__button-delete-article ${
    isLoggedIn && inProfile
      ? "card__button-delete-article"
      : "card__button-add-article card__button-delete-article_hidden"
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

        <button
          className="card__button-open-article"
          type="button"
          id="card__open-article"
          aria-label="open"
        >
          <a href={item.downloadUrl} target="_blank" className="card__link">
            Open Article
          </a>
        </button>

        {!inProfile ? (
          <button
            className={addButtonClassName}
            type="button"
            id="card__add-article"
            aria-label="add"
            onClick={handleSave}
          >
            Save Article
          </button>
        ) : (
          <button
            className={deleteButtonClassName}
            type="button"
            id="card__delete-article"
            aria-label="delete"
            onClick={handleDelete}
          >
            Delete Article
          </button>
        )}
      </div>
    </li>
  );
}

export default ArticleCard;
