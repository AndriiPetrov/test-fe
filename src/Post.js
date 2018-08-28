import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Post({item}) {
    return(
        <Router>
            <div className="Post">
                <div className="Post-title"><Link to={`/:id`}>{item.title}</Link></div>
                <div className="Post-body">{item.body}</div>
                <div className="Post-userId">{item.userId}</div>
            </div>
            <Route path={`/:id`} component={Post} />
        </Router>
    );
}
Post.propTypes = {
    item: PropTypes.object.isRequired
}

export default Post;