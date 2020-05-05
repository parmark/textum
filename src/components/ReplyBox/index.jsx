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
                    <input type="text" id={`name-field-${props.index}`} name='text'/>
                </span>
                {/* Post field */}
                <span>
                    <input type="text" id={`post-field-${props.index}`}/>
                </span>
                <button onClick={handleReply}>Reply</button>
            </form>
    )
}

export default ReplyBox;