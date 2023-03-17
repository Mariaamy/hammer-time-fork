import './Tools.css';
import ToolList from '../components/Tool/Toollist';


function Tools() {

    const mockdata = [
      {
        _id: "9123kqlajwdala2e9",
        title: "Scissors",
        information: "Some information on the scissors",
        availability: 10,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2¨+34823+4",
        title: "Hammer",
        information: "Some information on the hammer",
        availability: 10,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
    ];

  return <>
    <section className="toollist--container">
        <ToolList tools={mockdata}/>
    </section>
    </>
}

export default Tools;