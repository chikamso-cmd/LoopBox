// import { useState } from 'react';
import '../modal-styles/confirm.css'


 function Confirmpayment({ isOpen, onClose }) {
//    const [showModal, setShowModal] = useState(false);
 if (!isOpen) return null;
   return (
     <div className="page">
       <span class="material-symbols-outlined close" onClick={onClose}>
         close
       </span>

       {showModal && (
         <div className="confirm-overlay">
           <div className="confirm">
             <div className="confirm-header">
               <div className="logo">
                 <div className="logo-circle">
                   <img src="" alt="logoimg" />
                 </div>
                 <span className="logo-text">LoopBox</span>
               </div>
               <div className="header-info">
                 <div> +2348147247096</div>
                 <div>₦10,000.00</div>
               </div>
             </div>

             <hr />

             <div className="confirm-body">
               <div className="section-title">
                 <h4>Bank transfer</h4>
                 <span className="timer">02:15</span>
               </div>
               <p>Make transfer to the account details provided.</p>

               <div className="details">
                 <div>
                   <label>Account number</label>
                   <div>2209068957</div>
                 </div>
                 <div>
                   <label>Bank name</label>
                   <div>ZENITH BANK</div>
                 </div>
                 <div>
                   <label>Account name</label>
                   <div>LoopBox</div>
                 </div>
               </div>
             </div>

             <div className="modal-actions">
               <button className="confirm-button">Confirm payment</button>
               <button
                 className="back-button"
                 onClick={() => setShowModal(false)}
               >
                 Back to payment methods
               </button>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
export default Confirmpayment
