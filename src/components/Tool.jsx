import ToolCard from "./Tool/ToolCard";
import ToolProfile from "./Tool/ToolProfile";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Tool(props) {
    const [data, setData] = useState({});

    let { toolID } = useParams();

    const [tool, setTool] = useState();

  



    useEffect(() => {
        if(props.data) {
            setData(props.data);
        }else if(props.toolID) {
            // Fetch API data here


            //FECTHES DATA BUT FAILS TO LOAD? ASYNC AWAIT?


            const fetchTool = async () => {
                try {
                const res = await axios.get(`/api/tools/${toolID}`)
                setTool(res.data[0])

               
                } catch(error) {
                    console.log(error)
                }
          
            }

        
            fetchTool()
        
            

            
            setData(
                {
                    _id: "test",
                    name: "Hammer",
                    information: "ja",
                    availability: "Yes?"
                }
            )
        }
    }, [props.toolID, props.data]);


    // setTimeout(() => {
    // console.log(tool.name)
    // }, 1000)
    
    return (props.variant==="card" && <ToolCard data={data}/>) || <ToolProfile data={data}/>;
}
  
export default Tool;