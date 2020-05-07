import React from 'react';
import ReplyBox from '../ReplyBox'
import Post from '../Post'

function Thread(props) {
    
    return (
        <div className='thread'>
            {props.thread.posts.map(post => 
            <Post 
                name={post.name} 
                content={post.content}
                id={post.id}
            />)}
            <ReplyBox 
                index={props.index}
                reply={props.reply}
                id={props.id}
            />
        </div>
    )
}

export default Thread;