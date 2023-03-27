import './Bannerbar.css';

function Bannerbar(props) {
  return (
  <div className='bannerItem'>
    <img src={props.image} alt="warning icon"/>
    <div className={`banner ${props.className}`}>
    <p className='bannerTitle'>{props.title}</p>
    <p className='bannerBody'>{props.amount}</p>
    </div>
  </div>
  );
}

export default Bannerbar;