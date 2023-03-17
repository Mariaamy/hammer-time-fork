import './Toolpage.css';
import Tool from "../components/Tool";
import { useParams } from 'react-router-dom';

function Toolpage(props) {
  const { toolID } = useParams();

  return <>
    <section>
      <Tool variant="profile" data={props.data} toolID={toolID}/>
    </section>
  </>;
}

export default Toolpage;