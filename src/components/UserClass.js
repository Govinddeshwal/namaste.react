import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Govind",
        location: "pahad",
      },
    };

    console.log("child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Govinddeshwal");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>name: {name}</h2>
        <h2>location: {location}</h2>
      </div>
    );
  }
}
export default UserClass;
