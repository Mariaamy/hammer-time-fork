import ToolCard from "./Tool/ToolCard";
import ToolProfile from "./Tool/ToolProfile";
import { useEffect, useState } from "react";
import hAPI from "../api/hAPI";

function Tool(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        if(props.data) {
            setData(props.data);
        }else if(props.toolID) {
            // Fetch API data here
            hAPI.tools.getTool(props.toolID).then((data) => {
                setData(data.data);
            });
        }
    }, [props.toolID, props.data]);
    
    return (props.variant==="card" && <ToolCard data={data}/>) || <ToolProfile data={data}/>;
}
  
export default Tool;