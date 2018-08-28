import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

function Post({item}) {
    // console.log(item);
    return(
        <div className="Post">
            <div className="Post-title"><Link to={`/${item.id}`} className="Link">{item.title}</Link></div>
            <div className="Post-body">{item.body}</div>
            <div className="Post-userId">{item.userId}</div>
        </div>
    );
}
Post.propTypes = {
    item: PropTypes.object.isRequired
}

export default Post;