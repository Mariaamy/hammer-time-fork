import ToolCard from "./Tool/ToolCard";
import ToolProfile from "./Tool/ToolProfile";
import { useEffect, useState } from "react";

function Tool(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        if(props.data) {
            setData(props.data);
        }else if(props.toolID) {
            // Fetch API data here
            setData(
                {
                    _id: "test",
                    title: "Hammer",
                    information: "lol",
                    availability: "Yes?"
                }
            )
        }
    }, [props.toolID, props.data]);

    return (props.variant==="card" && <ToolCard data={data}/>) || <ToolProfile data={data}/>;
}
  
export default Tool;