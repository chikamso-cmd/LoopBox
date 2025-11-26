import "../styles/analysis.css";
import ContributionChart from "./barchart";
import user from '../assets/user_2.png'


function Analysis() {
 

  return (
    <div className="analysis-container">
      <div className="analysis">
        <div className="graph">
          <div className="header">
            <span className="material-symbols-outlined">docs</span>
            <h5>total contributed</h5>
          </div>
          <ContributionChart />
        </div>
        <div className="withdrawal">
          <div className="header">
            <span className="material-symbols-outlined">upload</span>
            <h5>next to receive</h5>
          </div>
          <figure>
            <img src={user} alt="user-image" />
            <p>round 5</p>
          </figure>
          <p> chioma favour</p>
          <h6> total amt $ 90,000</h6>
          <button>withdraw</button>
        </div>
      </div>
    </div>
  );
}
export default Analysis;
