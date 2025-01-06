import "./ConfirmationModal.css";

function ConfirmationModal({ isOpen, handleCloseClick }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
          onClick={handleCloseClick}
        />
        <h2 className="modal__heading">This is the confirmation modal</h2>
      </div>
    </div>
  );
}

export default ConfirmationModal;
