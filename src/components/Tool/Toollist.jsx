// loop throught toolcards
// Toolsarray.map(Tool) => {
//    return <Tool variant=card name={item.name} price={item.price}/>
// }

import Tool from "../Tool";

const ToolList = (props) => {
  return (
    <>
      {props.tools.map((tool) => {
        return <Tool variant="card" data={tool} />;
      })}
    </>
  );
};

export default ToolList;
