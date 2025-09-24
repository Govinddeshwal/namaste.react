import User from "./User";
import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About us</h1>
        <h2>Welcome to the react series</h2>
        {/* <User name={"Govind deshwal from UK"} Location={"Pahad"} /> */}
        <UserClass name={"Govind deshwal from UK"} Location={"Pahad"} />
      </div>
    );
  }
}

// const About = () => {
//   // return (
//   //   // <div>
//   //   //   <h1>About us</h1>
//   //   //   <h2>Welcome to the react series</h2>
//   //   //   {/* <User name={"Govind deshwal from UK"} Location={"Pahad"} /> */}
//   //   //   <UserClass name={"Govind deshwal from UK"} Location={"Pahad"} />
//   //   // </div>
//   // )
// };

export default About;
