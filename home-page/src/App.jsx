import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";

import Chat from 'chat/Chat';

const App = () => (
    <Container>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nam! Repellat beatae reiciendis harum quam nulla! Voluptatum nisi praesentium quod fugiat atque exercitationem in, aliquid adipisci vitae, alias molestiae voluptatibus!</p>
        <h1>Chat</h1>
        <Chat />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia exercitationem recusandae magni, dolor obcaecati ab accusamus aspernatur quod facere, esse iure explicabo animi optio pariatur nulla qui, nobis ut doloribus.</p>
    </Container>
)

ReactDOM.render(<App />, document.getElementById("app"));
