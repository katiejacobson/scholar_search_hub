import "./ProfileTopBar.css";

function ProfileTopBar({ savedArticles }) {
  return (
    <div className="profiletopbar__container">
      <p className="profiletopbar__title">Saved articles</p>
      <p className="profiletopbar__text">
        Katie, you have {savedArticles.length} saved articles.
      </p>
    </div>
  );
}

export default ProfileTopBar;
