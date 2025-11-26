import "../styles/Body.css";
import Analysis from "./analysis";
import Cards from "./card";
import Members from "./members";
import Navigation from "./nav";
import Upcomingbills from "./upcomingbills";

 
function Body() {
  
  return (
    <section className="body-container">
      <Navigation />
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
