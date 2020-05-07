import React from 'react';

function ReplyBox(props) {

    const handleReply = event => {
        event.preventDefault();
        props.reply(props)
    }

    return (
            <form>
                {/* Name field */}
                <span className="input">
                    <input className="input__field" type="text" id={`name-field-${props.index}`} name='text' placeholder="Name"/>
                    {/* <label htmlFor={`name-field-${props.index}`} className="input__label">
                        <span className="input__label-content"></span>
                    </label> */}
                </span>
                {/* Post field */}
                <span>
                    <input type="text" id={`post-field-${props.index}`} placeholder="Post"/>
                </span>
                <button className="submit" onClick={handleReply}>Reply</button>
            </form>
    )
}

export default ReplyBox;