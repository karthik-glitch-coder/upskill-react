import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent did mount");
  }

  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About class component page</h1>
        <div>
          <UserContext.Consumer>
            {(data) => <h1 className="font-bold">User Name : {data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2> This is Namaste React platform</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
