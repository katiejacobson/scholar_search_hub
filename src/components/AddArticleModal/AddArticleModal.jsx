import "./AddArticleModal.css";
import React, { useState, useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm.jsx";

function AddArticleModal({ activeModal, closeActiveModal, onAddArticle }) {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [abstract, setAbstract] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthors(e.target.value);
  };

  const handleCreatedDateChange = (e) => {
    setCreatedDate(e.target.value);
  };

  const handleAbstractChange = (e) => {
    setAbstract(e.target.value);
  };

  const handleDownloadUrlChange = (e) => {
    setDownloadUrl(e.target.value);
  };

  const isFormValid = title && authors && createdDate && downloadUrl;

  const handleSubmit = (e) => {
    console.log("click");
    e.preventDefault();
    onAddArticle(e, {
      title,
      authors,
      createdDate,
      abstract,
      downloadUrl,
    });
  };

  useEffect(() => {
    if (!activeModal) return;

    setTitle("");
    setAuthors("");
    setCreatedDate("");
    setAbstract("");
    setDownloadUrl("");
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
            value={title}
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
            value={authors}
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
            value={createdDate}
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
            value={abstract}
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
            value={downloadUrl}
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
