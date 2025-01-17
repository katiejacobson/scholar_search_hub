import "./AddArticleModal.css";
import React, { useState, useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm.jsx";
import { useFormAndValidation } from "../../hooks/useFormAndValidation.js";

function AddArticleModal({ activeModal, closeActiveModal, onAddArticle }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    console.log("click");
    e.preventDefault();
    onAddArticle(e, values);
  };

  useEffect(() => {
    if (!activeModal) return;

    resetForm();
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
            value={values.title || ""}
            onChange={handleChange}
          />
        </label>
        {errors.title && (
          <span className="modal__error modal__error_visible">
            {errors.title}
          </span>
        )}
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
            value={values.authors || ""}
            onChange={handleChange}
          />
        </label>
        {errors.authors && (
          <span className="modal__error modal__error_visible">
            {errors.authors}
          </span>
        )}
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Published Date
          <input
            className="modal__input"
            name="createdDate"
            type="text"
            id="article-date"
            placeholder="Published Date"
            required
            minLength="2"
            maxLength="40"
            value={values.createdDate || ""}
            onChange={handleChange}
          />
        </label>
        {errors.createdDate && (
          <span className="modal__error modal__error_visible">
            {errors.createdDate}
          </span>
        )}
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
            value={values.abstract || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Download Url
          <input
            className="modal__input"
            type="url"
            name="downloadUrl"
            id="url"
            placeholder="Download URL"
            value={values.downloadUrl || ""}
            onChange={handleChange}
            required
          />
        </label>
        {errors.downloadUrl && (
          <span className="modal__error modal__error_visible">
            {errors.downloadUrl}
          </span>
        )}
      </div>
      <button
        className="modal__button-main"
        type="submit"
        aria-label="submit"
        disabled={!isValid}
      >
        Add Article
      </button>
    </ModalForm>
  );
}

export default AddArticleModal;
