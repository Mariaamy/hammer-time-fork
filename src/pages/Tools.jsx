import './Tools.css';
import ToolList from '../components/Tool/Toollist';


function Tools() {

    const mockdata = [
      {
        _id: "9123kqlajwdala2e9",
        title: "Scissors",
        information: "Some information on the scissors",
        availability: 0,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2¨+34823+4",
        title: "Hammer",
        information: "Some information on the hammer",
        availability: 0,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2¨+34823+433",
        title: "A tool with a long name",
        information: "Some information on the hammer",
        availability: 10,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2f¨+34823+433",
        title: "A tool with a long name",
        information: "Some information on the hammer",
        availability: 10,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2¨+348s23+433",
        title: "A tool with a very very very very long name",
        information: "Some information on the hammer",
        availability: 1,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2¨+3482d3+433",
        title: "short name",
        information: "Some information on the hammer",
        availability: 10,
        broken: 0,
        missing: 0,
        courses: "basic"
      },
      {
        _id: "98i2¨+34823+f433",
        title: "A tool with a long name",
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