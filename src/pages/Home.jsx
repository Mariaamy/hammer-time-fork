import "./Home.css";
import Bannerbar from "../components/Bannerbar";
import totalIcon from "../media/tools2.png";
import availableIcon from "../media/available2.png";
import brokenIcon from "../media/broken2.png";
// import missingIcon from "../media/missing2.png";
import mustadImage from "../media/mustad02transparent1.png";
import { useEffect, useState } from "react";
import hAPI from "../api/hAPI";

function Home() {

  const [tools, setTools] = useState([]);
  
  let brokenCount = 0;

  useEffect(() => {
    hAPI.tools.getTools().then((response) => {
      setTools(response.data);
    });
  }, []);

  tools.map((tool) => {
    if(tool.broken === 1) {
      brokenCount += 1;
      console.log(brokenCount)
    }
  })


  // console.log(tools.filter((tool => tool.broken = 1)))

  // {props.tools.map((tool) => {
  //   return <Tool variant="card" data={tool} />;
  // })}
// BROKEN, MISSING, AVAILABLE NEEDS TO BE CALCULATED.


  return (
    <>
      <div class="mustad--container">
        <div id="mustad--text">
          <p>
            Browse, book and effortlessly manage your visits to the makerspace
            here.
          </p>
        </div>
        <div id="mustad--button">
          <a className="link--onsite" href="/tools">
            See our tools
          </a>
        </div>
        <img id="mustad" src={mustadImage} alt="NTNU" />
      </div>

      <main>
        <div className="information">
          <section id="section--intro">
            <h2>About</h2>
            <p>
              This is a management system for the workshop located at Mustad.
              This system is developed to make it easier for users of the
              workshop to book tools they'd like to use, as well as get an
              overview of when the different tools are available for use.
            </p>
            <p>
              The icons on the right hand, shows the statistical overview of the
              state of the tools. It shows the total number of existing tools,
              the number of how many are available for booking right now, how
              many are broken as well as the number of tools that are missing.
              To book a tool, click the button on the top of the page.
            </p>
          </section>
          <section id="section--add">
            <h2>Tool overview</h2>
            <div className="bannerContainer">
              <Bannerbar
                image={totalIcon}
                title="Total"
                amount={tools.length}
              ></Bannerbar>
              <Bannerbar
                className="available"
                image={availableIcon}
                title="Available"
                amount={tools.length - brokenCount}
              ></Bannerbar>
              {/* <Bannerbar
                className="missing"
                image={missingIcon}
                title="Missing"
                amount={10}
              ></Bannerbar> */}
              <Bannerbar
                className="broken"
                image={brokenIcon}
                title="Broken"
                amount={brokenCount}
              ></Bannerbar>
            </div>
          </section>
        </div>

        <h2 id="iframe-h2">Where is Makerspace located?</h2>
        <iframe
          title="Map of Mustad"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d895.4970110376705!2d10.674728715199532!3d60.789653163044385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641db7a7c610437%3A0x5783e79eaec830ba!2sNTNU%20Institutt%20for%20design%2C%20Gj%C3%B8vik!5e0!3m2!1sen!2sus!4v1678442407727!5m2!1sen!2sus"
        ></iframe>
      </main>
    </>
  );
}

export default Home;
