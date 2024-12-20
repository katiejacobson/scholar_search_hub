import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform__container">
      <h2 className="searchform__description">
        Open Access journal articles to help you with your research
      </h2>
      <p className="searchform__instructions">
        Find your next article to read and save it to your account
      </p>
      <form className="searchform__form">
        <input
          className="searchform__input"
          type="text"
          name="keyword"
          id="keyword"
          placeholder="Enter keyword"
        />
        <button className="searchform__button">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
