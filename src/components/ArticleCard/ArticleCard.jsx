import "./ArticleCard.css";

function ArticleCard({ item }) {
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
        </a>
      </div>
    </li>
  );
}

export default ArticleCard;
