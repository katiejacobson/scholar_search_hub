import React, { useState, useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm.jsx";
import "./RegisterModal.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation.js";

const RegisterModal = ({
  activeModal,
  closeActiveModal,
  handleRegistration,
  handleLogInClick,
}) => {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  // });
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [nameError, setNameError] = useState("");

  // const isFormValid = data.email && data.password && data.name;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (e.target.name === "email") {
  //     setEmailError(e.target.validationMessage);
  //   }
  //   if (e.target.name === "password") {
  //     setPasswordError(e.target.validationMessage);
  //   }
  //   if (e.target.name === "name") {
  //     setNameError(e.target.validationMessage);
  //   }
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  useEffect(() => {
    if (!activeModal) return;

    // setData({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
    resetForm();
  }, [activeModal]);

  return (
    <ModalForm
      title="Sign Up"
      activeModal={activeModal}
      handleCloseClick={closeActiveModal}
      name={"register"}
      isOpen={activeModal === "register"}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-field">
        <label className="modal__label">
          Email*
          <input
            className="modal__input"
            name="email"
            type="email"
            id="register-email"
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
            id="register-password"
            placeholder="Password"
            minLength="2"
            maxLength="40"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
        </label>
        {errors.password && (
          <span className="modal__error modal__error_visible">
            {errors.password}
          </span>
        )}
      </div>

      <div className="modal__form-field">
        <label className="modal__label">
          Name*
          <input
            className="modal__input"
            name="name"
            type="text"
            id="register-name"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
        </label>
        {errors.name && (
          <span className="modal__error modal__error_visible">
            {errors.name}
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
          Sign Up
        </button>
        <button
          className="modal__button-alternative"
          type="button"
          aria-label="button"
          onClick={handleLogInClick}
        >
          or Log In
        </button>
      </div>
    </ModalForm>
  );
};

export default RegisterModal;
