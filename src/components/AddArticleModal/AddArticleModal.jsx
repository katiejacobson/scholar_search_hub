import "./AddArticleModal.css";
import React, { useState, useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm.jsx";

function AddArticleModal({ activeModal, closeActiveModal, onAddArticle }) {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthors, setArticleAuthors] = useState("");
  const [articleCreatedDate, setArticleCreatedDate] = useState("");
  const [articleAbstract, setArticleAbstract] = useState("");
  const [articleDownloadUrl, setArticleDownloadUrl] = useState("");

  const handleTitleChange = (e) => {
    setArticleTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setArticleAuthors(e.target.value);
  };

  const handleCreatedDateChange = (e) => {
    setArticleCreatedDate(e.target.value);
  };

  const handleAbstractChange = (e) => {
    setArticleAbstract(e.target.value);
  };

  const handleDownloadUrlChange = (e) => {
    setArticleDownloadUrl(e.target.value);
  };

  const isFormValid =
    articleTitle && articleAuthors && articleCreatedDate && articleDownloadUrl;

  const handleSubmit = (e) => {
    console.log("click");
    e.preventDefault();
    onAddArticle(e, {
      articleTitle,
      articleAuthors,
      articleCreatedDate,
      articleAbstract,
      articleDownloadUrl,
    });
  };

  useEffect(() => {
    if (!activeModal) return;

    setArticleTitle("");
    setArticleAuthors("");
    setArticleCreatedDate("");
    setArticleAbstract("");
    setArticleDownloadUrl("");
  }, [activeModal]);

  return (
    <ModalForm
      title="New article"
      activeModal={activeModal}
      handleCloseClick={closeActiveModal}
      name={"new-article"}
      isOpen={activeModal === "add-article"}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-field">
        <label className="modal__label">
          Title
          <input
            className="modal__input"
            name="title"
            type="text"
            id="article-title"
            placeholder="Article Title"
            required
            minLength="2"
            maxLength="40"
            value={articleTitle}
            onChange={handleTitleChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Authors
          <input
            className="modal__input"
            name="authors"
            type="text"
            id="article-authors"
            placeholder="Authors"
            minLength="2"
            maxLength="40"
            required
            value={articleAuthors}
            onChange={handleAuthorChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Published Date
          <input
            className="modal__input"
            name="date"
            type="text"
            id="article-date"
            placeholder="Published Date"
            required
            minLength="2"
            maxLength="40"
            value={articleCreatedDate}
            onChange={handleCreatedDateChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Abstract
          <input
            className="modal__input"
            name="abstract"
            type="text"
            id="article-abstract"
            placeholder="Abstract"
            minLength="2"
            value={articleAbstract}
            onChange={handleAbstractChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Download Url
          <input
            className="modal__input"
            type="url"
            name="article-downloadurl"
            id="url"
            placeholder="Download URL"
            value={articleDownloadUrl}
            onChange={handleDownloadUrlChange}
            required
          />
        </label>
      </div>
      <button
        className="modal__button-main"
        type="submit"
        aria-label="submit"
        disabled={!isFormValid}
      >
        Add Article
      </button>
    </ModalForm>
  );
}

export default AddArticleModal;
