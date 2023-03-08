import './Home.css';
import Tool from "../components/Tool";
import Header from "../components/Header";

function Home() {
  return <>
    <Header/>
    <section>
    <div class="section--nav">
      <p>Landing page header - book a tool button takes you to the tools on the section below??</p>
      <a class="link--onsite" href="#section--about">About the workshop</a>
      <a class="link--onsite" href="#section--tool">Book tools</a>
    </div>
    </section>
    <section id="section--about">
      <h2>Information about the workshop</h2>
      <p>Information with statistics etc.</p>
      <div class="section--about--container">

      </div>
    </section>
    <section id="section--tool">
      <h2>Tools</h2>
      <div class="section--tool--container">
        <Tool variant="card"/>
        <Tool variant="card"/>
        <Tool variant="card"/>
        <Tool variant="card"/>
        <Tool variant="card"/>
        <Tool variant="card"/>
      </div>
    </section>
  </>;
}

export default Home;