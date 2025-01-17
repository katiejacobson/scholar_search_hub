import "./ConfirmationModal.css";

function ConfirmationModal({ isOpen, handleCloseClick, text }) {
  return (
    <div
      className={`modal modal__type_${name} ${
        isOpen ? "modal modal_opened" : ""
      }`}
    >
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
          onClick={handleCloseClick}
        />
        <h2 className="confirmation-modal__heading">{text}</h2>
      </div>
    </div>
  );
}

export default ConfirmationModal;
