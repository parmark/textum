import React from 'react';

function ReplyBox(props) {

    const handleReply = event => {
        event.preventDefault();
        props.reply(props)
    }

    return (
            <form>
                {/* Name field */}
                <span>
                    <input type="text" id={`name-field-${props.id}`} name='text'/>
                </span>
                {/* Post field */}
                <span>
                    <input type="text" id={`post-field-${props.id}`}/>
                </span>
                <button onClick={handleReply}>Reply</button>
            </form>
    )
}

export default ReplyBox;