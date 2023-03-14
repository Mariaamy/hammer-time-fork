// loop throught toolcards 
// Toolsarray.map(Tool) => {
//    return <Tool variant=card name={item.name} price={item.price}/>
// }

import Tool from "../Tool";

const ToolsArray = Tool.map = (tool) => {
    return <Tool variant="card" data={tool.mockdata}/>
}


export default ToolsArray