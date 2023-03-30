// loop throught toolcards 
// Toolsarray.map(Tool) => {
//    return <Tool variant=card name={item.name} price={item.price}/>
// }

import { useEffect, useState } from "react";
import axios from 'axios';

import Tool from "../Tool";

const ToolList = (props) => {




    //GET /api/tools

    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchTools = async () => {
            axios.get('/api/tools')
            .then(res => {
                setTools(res.data)
            }). catch(err => {
                console.log(err)
            })
    
        }

        fetchTools()
    }, [])





    
    return (<>
        {
            tools && tools.map((tool) => (
                <Tool key={tool._id} variant="card" data={tool}/>
            ))
        }
    
    </>);
}


export default ToolList