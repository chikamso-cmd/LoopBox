import '../styles/main.css';
import Body from './Body';
import Sidebar from './sidebar';

function Main() {
  return (
   <section className="body">
      <Sidebar />
      <Body />
   </section>
  );
}
export default Main;
