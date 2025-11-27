import "../styles/data.css";
import user from "../assets/user_2.png";

const Data = () => {
  return (
    <div className="table-container">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Christian Albert
            </td>
            <td>$10,000</td>
            <td>Transfer</td>
            <td>23/04/2023</td>
            <td>
              <span className="status pending">Pending</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Aisha Bello
            </td>
            <td>$4,200</td>
            <td>Card</td>
            <td>25/04/2023</td>
            <td>
              <span className="status successful">Successful</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              John Martins
            </td>
            <td>$8,500</td>
            <td>Transfer</td>
            <td>26/04/2023</td>
            <td>
              <span className="status failed">Failed</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Zainab Musa
            </td>
            <td>$2,300</td>
            <td>USSD</td>
            <td>28/04/2023</td>
            <td>
              <span className="status successful">Successful</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Paul Okafor
            </td>
            <td>$12,000</td>
            <td>Transfer</td>
            <td>01/05/2023</td>
            <td>
              <span className="status pending">Pending</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Deborah Williams
            </td>
            <td>$6,750</td>
            <td>Card</td>
            <td>02/05/2023</td>
            <td>
              <span className="status failed">Failed</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Samuel Ade
            </td>
            <td>$9,100</td>
            <td>USSD</td>
            <td>04/05/2023</td>
            <td>
              <span className="status successful">Successful</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Fatima Lawal
            </td>
            <td>$1,800</td>
            <td>Transfer</td>
            <td>05/05/2023</td>
            <td>
              <span className="status pending">Pending</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Michael Brown
            </td>
            <td>$15,400</td>
            <td>Card</td>
            <td>06/05/2023</td>
            <td>
              <span className="status successful">Successful</span>
            </td>
          </tr>

          <tr>
            <td className="user-cell">
              <img src={user} alt="user" />
              Grace Peterson
            </td>
            <td>$3,500</td>
            <td>USSD</td>
            <td>07/05/2023</td>
            <td>
              <span className="status failed">Failed</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="buttons">
        <button className="prev">previous</button>
        <button className="next">next</button>
      </div>
    </div>
  );
};

export default Data;
