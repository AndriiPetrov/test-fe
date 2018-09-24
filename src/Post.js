import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
// import { Link} from 'react-router-dom';

function Post({item, removeArticle, index}) {
    // if(match.params.id)
    // console.log(match);
    console.log(index);
    
    return(
        <div className="Post">
            <div className="Post-title">{item.title}</div>
            <div className="Post-body">{item.body}</div>
            <div className="Post-userId">{item.userId}</div>
            <button className="Remove-button" onClick={(index)=>removeArticle(index)}>Delete</button>
        </div>
    );
}

Post.propTypes = {
    item: PropTypes.object.isRequired
}

export default Post;