import './Bannerbar.css';
import icon from '../media/tools.png'
function Bannerbar() {
  return (
  <div className='bannerItem'>
    <img src={icon} alt="warning icon"/>
    <div className='banner'>
    <h1>Broken</h1>
    <h2>90</h2>
    </div>
  </div>
  );
}

export default Bannerbar;