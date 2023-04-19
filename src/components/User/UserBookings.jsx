// import './UserBookings.css';
// import Tool from '../Tool'
// // Tool list?

// function UserBookings(props) {
//     return (
//         <div>
//            <Tool variant="card"/>
//         </div>
//     );
// }

// export default UserBookings;

import "./UserBookings.css";
import ToolList from "../../components/Tool/Toollist";

function UserBookings() {
  const mockdata = [
    {
      _id: "9123kqlajwdala2e9",
      title: "Scissors",
      information: "Some information on the scissors",
      availability: 0,
      broken: 0,
      missing: 0,
      courses: "basic",
    },
    {
      _id: "98i2¨+34823+4",
      title: "Hammer",
      information: "Some information on the hammer",
      availability: 0,
      broken: 0,
      missing: 0,
      courses: "basic",
    },
  ];

  return (
    <>
      <section className="toollist--container">
        <ToolList tools={mockdata} />
      </section>
    </>
  );
}

export default UserBookings;
