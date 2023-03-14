import ToolCard from "./Tool/ToolCard";
import ToolProfile from "./Tool/ToolProfile";

function Tool(props) {
    // Fetch data from API here, and pass it to the appropriate display component
    // const data = {};
    const mockdata =
        {
            title: "siccors",
            information: "Some information on the scissors",
            availability: 10,
            broken: 0,
            missing: 0,
            courses: "basic"
        };

    return (props.variant==="card" && <ToolCard data={mockdata}/>) || <ToolProfile data={mockdata}/>;
}
  
export default Tool;