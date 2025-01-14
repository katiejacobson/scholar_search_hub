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
  confirmAction,
  recordAction,
}) {
  const markInProfile = () => {
    console.log(currentUser);
  };

  useEffect(() => {
    setInProfile(true);

    return () => {
      setInProfile(false);
    };
  }, [setInProfile]);

  return (
    <div className="profile">
      <ProfileTopBar savedArticles={savedArticles} />

      <ArticleSection
        savedArticles={savedArticles}
        inProfile={inProfile}
        addSavedArticle={addSavedArticle}
        deleteSavedArticle={deleteSavedArticle}
        confirmAction={confirmAction}
        recordAction={recordAction}
      />
    </div>
  );
}

export default Profile;
