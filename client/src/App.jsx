import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.scss";

import Chat from './components/Chat'

const App = () => <Chat />;

ReactDOM.render(<App />, document.getElementById("app"));
