import User from "./User";
import React from "react";
import UserContext from "../utils/ UserContext";

import UserClass from "./UserClass";
import UserContext from "../utils/ UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About us</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
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
