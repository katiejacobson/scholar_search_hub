import "./ArticleSection.css";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";

function ArticleSection({
  savedArticles,
  inProfile,
  addSavedArticle,
  deleteSavedArticle,
}) {
  return (
    <div className="articlesection__container">
      <ul className="itemcards">
        {savedArticles.length > 0 &&
          savedArticles.map((item, index) => {
            return (
              <ArticleCard
                key={index}
                item={item}
                inProfile={inProfile}
                addSavedArticle={addSavedArticle}
                deleteSavedArticle={deleteSavedArticle}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ArticleSection;
