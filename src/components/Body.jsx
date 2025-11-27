import "../styles/Body.css";
import Analysis from "./analysis";
import Cards from "./card";
import Members from "./members";
import Upcomingbills from "./upcomingbills";

function Body() {
  return (
    <section className="body-container">
      <Cards />
      <Analysis />
      <div className="users">
        <Members />
        <Upcomingbills />
      </div>
    </section>
  );
}
export default Body;
