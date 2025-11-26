import '../styles/payment.css';
import Navigation from './nav';
import Sidebar from './sidebar';


function Payment() {
    return (
        <div className="payment-container">
            <Navigation />
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    )
}
export default Payment