import './ToolCard.css';

function ToolCard(props) {
    return (
        <div className="tool">
            <div className="tool--image">
                <img src={require('./logo1.png')} alt="react logo" className="tool--image--img"/>
            </div>
            <div className="tool--info">
                {/* href to /tool/id --- db.tools.name */}
                <a href="/tool">Name of item</a>
            </div>
        </div>
    );
}
  
export default ToolCard;