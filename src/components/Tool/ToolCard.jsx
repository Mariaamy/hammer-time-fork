import './ToolCard.css';
import { Link } from 'react-router-dom';

function ToolCard(props) {
    return (
        <Link to={`/tool/${props.data._id}`}>
        <div className={props.data.availability === 0 ? "tool tool--info--notavailable--container" : "tool tool--info--available--container"}>
            <div className="tool--image">
                <img src={require('./logo1.png')} alt="react logo" className="tool--image--img"/>
            </div>
            <div className="tool--info">
                {/* href to /tool/id --- db.tools.name */}
                <p>{props.data.title}</p>
                <p className={props.data.availability === 0 ? "tool--info--notavailable" : "tool--info--available"}>{props.data.availability === 0 ? props.data.availability = "Not available for booking" : "Available for booking"}</p>
            </div>
        </div>
        </Link>
    );
}
  
export default ToolCard;