import "./ProfileTopBar.css";

function ProfileTopBar({ savedArticles }) {
  return (
    <section className="profiletopbar">
      <p className="profiletopbar__title">Saved articles</p>
      <p className="profiletopbar__text">
        Katie, you have {savedArticles.length} saved articles.
      </p>
    </section>
  );
}

export default ProfileTopBar;
