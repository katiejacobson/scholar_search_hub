import "./ArticleCard.css";

function ArticleCard({ item }) {
  const logInfo = (info) => {
    console.log(info);
  };

  const displayAuthors = (authors) => {
    authors.length > 0 &&
      authors.map((item) => {
        console.log(item);
        return <p className="card__authors">item</p>;
      });
  };

  return (
    <li className="card" key={item.id}>
      <div className="card__info-container">
        <p className="card__title">{item.title}</p>
        <p className="card__date">{item.createdDate}</p>
        {displayAuthors(item.authors)}
        {/* <p className="card__authors">{displayAuthors(item.authors)}</p> */}
        <p className="card__abstract">{item.abstract}</p>
      </div>
      <div className="card__button-container">
        <button type="button" id="card__open-article" aria-label="open">
          Open Article
        </button>
      </div>
    </li>
  );
}

export default ArticleCard;
