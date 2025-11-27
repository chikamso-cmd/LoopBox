import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page">
      <button className="open-button" onClick={() => setShowModal(true)}>
        Pay with Card
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div className="logo">LoopBox</div>
              <div className="bank">Zenith Bank</div>
            </div>

            <div className="modal-body">
              <h2>Credit Card</h2>

              <form className="form">
                <label>Amount ₦</label>
                <input type="text" placeholder="Enter amount" />

                <label>Payment Method</label>
                <select>
                  <option>Credit/Debit Card</option>
                </select>

                <label>Name on Card</label>
                <input type="text" value="Chioma Favour" readOnly />

                <div className="row">
                  <div>
                    <label>Expiry</label>
                    <input type="text" value="06 / 2024" readOnly />
                  </div>
                  <div>
                    <label>CVV</label>
                    <input type="text" placeholder="CVV" />
                  </div>
                </div>

                <label>Card Number</label>
                <input type="text" value="1234 5678 1234 1234" readOnly />

                <label>Country</label>
                <select>
                  <option>Nigeria</option>
                </select>

                <label>Postcode</label>
                <input type="text" value="3066" readOnly />
              </form>

              <div className="modal-actions">
                <button
                  className="cancel-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="continue-button">Continue</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
