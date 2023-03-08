import './Home.css';
import Tool from "../components/Tool";
import Header from "../components/Header";

function Toolpage() {
  return <>
    <Header/>
    <section>
        <Tool variant="profile"/>
    </section>
  </>;
}

export default Toolpage;