import React from 'react';
import Thread from '../Thread'

function Header(props) {
    return (
        <div className="header">
            <div className="title">
                Textum
            </div>
            <div className="create">
                <Thread 
                    thread={
                        {
                            posts: []
                        }
                    }
                    reply={props.handleCreate}
                />
            </div>
        </div>
    )
}

export default Header;