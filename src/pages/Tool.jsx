import './tool.css';

function Tool() {
    return (
        <div className="tool">
            <div className="tool--image">
                <img src={require('./logo1.png')} alt="dice" className="tool--image--img"/>
            </div>
            <div className="tool--info">
                <p>Name of item</p>
            </div>
            <div className="tool--info tool--info--btn">
                    <a>Book this item</a>
                </div>
        </div>
    );
}

export default Tool;