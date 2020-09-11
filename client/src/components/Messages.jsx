import React from "react";
import { useSubscription, gql } from '@apollo/client';

const GET_MESSAGES = gql`
    subscription {
        messages {
            id
            content
            user
        }
    }
`

const Messages = ({ user }) => {
    const { data } = useSubscription(GET_MESSAGES);

    if (!data) {
        return null
    }

    return (
        <div>
            {data.messages.map(({id, content, user: messageUser}) => (
                <div 
                    style={{
                        display: 'flex', 
                        justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
                        paddingBottom: '1em'
                    }}
                >
                    { user !== messageUser && (
                        <div
                            style={{
                               height: 50,
                               width: 50,
                               borderRadius: "50%",
                               border: "2px solid #e5e6ea",
                               textAlign: "center",
                               fontSize: "18pt",
                               marginRight: "1em",
                               paddingTop: 5
                            }}
                        >
                            {messageUser.slice(0, 2).toUpperCase()}
                        </div>
                    )}
                    <div
                         style={{
                            background: user === messageUser ? "#58bf56" : "#e5e6ea",
                            color: user === messageUser ? "white" : "black",
                            padding: "1em",
                            borderRadius: '1em',
                            maxWidth: "50%"
                        }}
                    >
                        {content}
                    </div>
                    
                </div>
            ))}
        </div>        
    );
}

export default Messages;