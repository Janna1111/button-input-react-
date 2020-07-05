import React from "react";
import Button from "./js/button";
import Input from "./js/input";
import InputPass from "./js/inputPass";

class App extends React.Component {
  state = {
    login: "",
    password: "",
  };
  onInputChange = (event) => {
    if (event.target.type === "text") {
      this.setState({
        login: event.target.value,
      });
    }
    if (event.target.type === "password") {
      this.setState({
        password: event.target.value,
      });
    }
  };
  alertInput = () => {
    alert(`${this.state.login} ${this.state.password}`);
  };
  render() {
    return (
      <div>
        <Input inputlogin={this.onInputChange} />
        <InputPass inputPass={this.onInputChange} />
        <Button
          alertInput={this.alertInput}
          dis={!(this.state.login.length > 1 && this.state.password.length > 1)}
        />
      </div>
    );
  }
}
export default App;
