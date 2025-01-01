import { useEffect } from "react";

import "./Profile.css";
import ProfileTopBar from "../ProfileTopBar/ProfileTopBar.jsx";
import ArticleSection from "../ArticleSection/ArticleSection.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Profile({
  savedArticles,
  setInProfile,
  inProfile,
  addSavedArticle,
  deleteSavedArticle,
}) {
  const markInProfile = () => {
    console.log(inProfile);
  };

  useEffect(() => {
    setInProfile(true);

    return () => {
      setInProfile(false);
    };
  }, [setInProfile]);

  return (
    <div className="profile__container">
      <section>
        <ProfileTopBar savedArticles={savedArticles} />
      </section>
      <section>
        <ArticleSection
          savedArticles={savedArticles}
          inProfile={inProfile}
          addSavedArticle={addSavedArticle}
          deleteSavedArticle={deleteSavedArticle}
        />
      </section>
    </div>
  );
}

export default Profile;
