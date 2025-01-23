import React, { useState, useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm.jsx";
import "./LoginModal.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation.js";

const LoginModal = ({
  activeModal,
  closeActiveModal,
  handleLogIn,
  handleSignUpClick,
}) => {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(values);
  };

  useEffect(() => {
    if (!activeModal) return;

    resetForm();
  }, [activeModal]);

  return (
    <ModalForm
      title="Log In"
      activeModal={activeModal}
      handleCloseClick={closeActiveModal}
      name={"login"}
      isOpen={activeModal === "login"}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-field">
        <label className="modal__label">
          Email*
          <input
            className="modal__input"
            name="email"
            type="email"
            id="login-email"
            placeholder="Email"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
        </label>
        {errors.email && (
          <span className="modal__error modal__error_visible">
            {errors.email}
          </span>
        )}
      </div>
      <div className="modal__form-field">
        <label className="modal__label">
          Password*
          <input
            className="modal__input"
            type="text"
            name="password"
            id="login-password"
            placeholder="Password"
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
        </label>
        {errors.password && (
          <span className="modal__error modal__error_visible">
            {errors.password}
          </span>
        )}
      </div>
      <div className="modal__button-container">
        <button
          className="modal__button-main"
          type="submit"
          aria-label="submit"
          disabled={!isValid}
        >
          Log In
        </button>
        <button
          className="modal__button-alternative"
          type="button"
          aria-label="button"
          onClick={handleSignUpClick}
        >
          or Sign Up
        </button>
      </div>
    </ModalForm>
  );
};

export default LoginModal;
