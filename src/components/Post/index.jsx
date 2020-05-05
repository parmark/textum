import React from 'react';

function Post(props) {
    return (
        <div className='post'>
            {props.name ? 
                <p className='name'>{props.name} No. {props.id}</p>
            :
            <p className='name'>Anonymous No. {props.id}</p>
            }
            <p className='content'>{props.content}</p>

        </div>
    )
}

export default Post;