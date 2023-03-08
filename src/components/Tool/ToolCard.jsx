import './ToolCard.css';

function ToolCard(props) {
    return (
        <div className="tool">
            <div className="tool--image">
                <img src={require('./logo1.png')} alt="dice" className="tool--image--img"/>
            </div>
            <div className="tool--info">
                <a href="/tool">Name of item</a>
                <p>Availability: </p>
            </div>
            <div className="tool--info tool--info--btn">
                    <a>Book this item</a>
                </div>
        </div>
    );
}
  
export default ToolCard;