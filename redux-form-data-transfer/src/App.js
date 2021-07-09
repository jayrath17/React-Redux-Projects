// make sure check the version of dependencies
import React from "react";
import Form from "./components/forrm";
import { Values } from "redux-form-website-template";
import Store from "./store/store";
import { Provider } from "react-redux";
import showResults from "./show";
// make sure check the version of dependencies
import "./styles.css";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
        <Form onSubmit={showResults} />
        {/* onsubmit i have console-log(data) --you can do whatever with that function in show.js just modify it as you want */}
        <Values form="Form" />
        {/* our showResults does not depend on this <Value/>;its just showing current data value in screen(its predefined template or library) you can remove if you want*/}
      </div>
    </Provider>
  );
}

export default App;
