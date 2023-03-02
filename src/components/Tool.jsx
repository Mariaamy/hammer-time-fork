import ToolCard from "./Tool/ToolCard";
import ToolProfile from "./Tool/ToolProfile";

function Tool(props) {
    // Fetch data from API here, and pass it to the appropriate display component
    const data = {};

    return (props.variant==="card" && <ToolCard data={data}/>) || <ToolProfile data={data}/>;
}
  
export default Tool;