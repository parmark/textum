import React from 'react';
import ReplyBox from '../ReplyBox'
import Post from '../Post'

function Thread(props) {
    
    return (
        <div className='thread'>
            <ReplyBox 
                id={props.thread.id}
                reply={props.reply}
            />
            {props.thread.posts.map(post => 
            <Post 
                name={post.name} 
                content={post.content}
            />)}
        </div>
    )
}

export default Thread;