import React from 'react';
import './NewsPage.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const NewsPage = ({items}) => (
    <div style={{width: '80%', margin: '0 auto'}}>
        <ul className="NewsPage-items">
          {items.map(item =>
            <li key={item.id}>
              <Post item={item}>

              </Post>
            </li>
          )}
        </ul>
    </div>
)
NewsPage.proptypes = {
  items: PropTypes.array.isRequired
}

export default NewsPage;