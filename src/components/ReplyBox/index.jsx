import React from 'react';

function ReplyBox(props) {

    const handleReply = event => {
        event.preventDefault();
        props.reply(props)
    }

    return (
            <form>
                {/* Name field */}
                <span className="name-input">
                    <input className="input__field" type="text" id={`name-field-${props.index}`} name='text' placeholder="Name"/>
                </span>
                {/* Post field */}
                <span className="content-input">
                    <input type="text" id={`post-field-${props.index}`} placeholder="Post"/>
                </span>
                <button className="submit" onClick={handleReply}>Reply</button>
            </form>
    )
}

export default ReplyBox;