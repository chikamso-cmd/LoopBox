import logo from "../assets/logo.png";
import "../modal-styles/addpayment.css";

function Addpayment({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-headers">
          <span class="material-symbols-outlined close" onClick={onClose}>
            close
          </span>
          <div className="logo-box">
            <img src={logo} alt="loopbox-logo" />
          </div>
        </div>

        {/* Body */}
        <div className="modal-Body">
          <h2>Add Payment</h2>
          <p className="subtitle">Add funds to your contribution account</p>

          <label>Amount [₦]</label>
          <div className="input-box">
            <span>₦</span>
            <input
              type="number"
              value=''
              placeholder="10,000" readOnly disabled
            />
          </div>

          <label>Payment Method</label>
          <select>
            <option value="">Select Payment Method</option>
            <option value="card">Card</option>
            <option value="bank">Bank Transfer</option>
            <option value="wallet">Wallet</option>
          </select>

          <div className="modal-actions">
            <button className="btns cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="btns continue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Addpayment;
