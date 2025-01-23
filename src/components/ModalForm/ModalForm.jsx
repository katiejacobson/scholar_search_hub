import "./ModalForm.css";

function ModalForm({
  children,
  title,
  handleCloseClick,
  name,
  isOpen,
  onSubmit,
}) {
  const backToHome = () => {
    handleCloseClick();
  };

  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
        />
        <h2 className="modal__heading">{title}</h2>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
