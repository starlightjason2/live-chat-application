import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from '@apollo/client';
import { Container, Row, Col, FormInput, Button } from 'shards-react'
import { WebSocketLink } from '@apollo/client/link/ws';

import Messages from './Messages'

const link = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
        reconnect: true
    }
});

const client = new ApolloClient({
    link,
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});


const POST_MESSAGE = gql`
    mutation ($user: String!, $content: String!) {
        postMessage(user: $user, content: $content)
    }
`

const Chat = () => {
    const [state, stateSet] = React.useState({
        user: 'Jason',
        content: ''
    })

    const [postMessage] = useMutation(POST_MESSAGE);
    
    const onSend = () => {
        if (state.content.length > 0) {
            postMessage({
                variables: state
            });
        }

        stateSet({
            ...state,
            content: ''
        })
    }

    return (
        <Container>
            <Messages user={state.user} />
            <Row>
                <Col xs={2} style={{padding: 10}}>
                    <FormInput 
                        label="User"
                        value={state.user}
                        onChange={(evt) => stateSet({
                            ...state,
                            user: evt.target.value
                        })}
                    />
                </Col>

                <Col xs={8} style={{padding: 10}}>
                    <FormInput 
                        label="Content"
                        value={state.content}
                        onChange={(evt) => stateSet({
                            ...state,
                            content: evt.target.value
                        })}
                        onKeyUp={(evt) => {
                            if (evt.keyCode === 13) {
                                onSend();
                            }
                        }}
                    />
                </Col>

                <Col xs={2} style={{padding: 10}}>
                    <Button onClick={() => onSend()} style={{width: "100%"}}>
                        Send
                    </Button>        
                </Col>
            </Row>
        </Container>
    )
}

export default () => (
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
)