import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        location: "defaultLocation",
      },
    };

    //console.log("child constructor");
  }

  async componentDidMount() {
    //console.log("child did mount");
    const data = await fetch(
      "https://api.github.com/users/karthik-glitch-coder"
    );

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    //console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="p-5">
        <img className="w-52 p-4 rounded-full" src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
