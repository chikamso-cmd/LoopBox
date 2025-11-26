import "../modal-styles/modal.css";

const Modal = ({ isOpen, onClose }) => {
    
    if (!isOpen) return null;
  return (
    <div className="overlay">
      <div className="modal">
        <span class="material-symbols-outlined close" onClick={onClose}>close</span>
        <div className="modal-wrapper">
          <div className="modal-header">
            <h1>withdraw funds</h1>
            <p>withdraw your available balance from loopBox</p>
          </div>
          <div className="modal-body">
            <div className="modalbody">
              <div className="modal-input">
                <h5>available balance</h5>
                <h4>$900,000</h4>
              </div>
              <span className="material-symbols-outlined">
                account_balance_wallet
              </span>
            </div>

            <div className="modal-form">
              <label>withdrawal amount</label>
              <input
                type="text"
                name=""
                id="amount"
                disabled
                contentEditable="false"
                placeholder="$10,000"
              />
              <label>withdrawal method</label>
              <div className="transfer">
                <span className="material-symbols-outlined">
                  account_balance
                </span>
                <input
                  type="text"
                  disabled
                  placeholder="bank transfer"
                  className="disabled"
                />
              </div>
              <label>withdrawal method</label>
              <select name="" id="">
                <option value="" selected disabled>
                  choose an account
                </option>
              </select>
              <button className="addaccount">+ add new account</button>
            </div>
            <div className="btns">
              <button>cancel</button>
              <button className="continue">continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
