import React from 'react';
import './NewsPage.css';
import Post from './Post';
import PropTypes from 'prop-types';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import Routing from './Routing';
// import {items} from './post-data';
// console.log(items);
const NewsPage = ({items, removeArticle}) => (
    <div style={{width: '80%', margin: '0 auto'}}>
      
        <ul className="NewsPage-items">
          {items.map((item, index) =>
            <li key={index}>
              <Post index={index} item={item} removeArticle={removeArticle}>

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