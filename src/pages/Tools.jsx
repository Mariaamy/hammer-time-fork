import "./Tools.css";
import ToolList from "../components/Tool/Toollist";
import { useEffect, useState } from "react";
import hAPI from "../api/hAPI";

function Tools() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    hAPI.tools.getTools().then((response) => {
      setTools(response.data);
    });
  }, []);

  return (
    <>
      <section className="toollist--container">
        <ToolList tools={tools} />
      </section>
    </>
  );
}

export default Tools;
