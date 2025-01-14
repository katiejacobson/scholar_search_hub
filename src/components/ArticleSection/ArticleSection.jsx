import "./ArticleSection.css";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";

function ArticleSection({
  savedArticles,
  inProfile,
  addSavedArticle,
  deleteSavedArticle,
  confirmAction,
  recordAction,
}) {
  return (
    <section className="articlesection">
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
                confirmAction={confirmAction}
                recordAction={recordAction}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default ArticleSection;
