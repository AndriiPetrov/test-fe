import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsPage from './NewsPage';
import Post from './Post';
import Routing from './Routing';

const Posts = ({items}) => (
    <div>
        <Switch>
        <Route exact path='/posts' render={() => <Routing items={items}/>}/>
        {/* <Route path='/posts/:id' render={() => <Post item={item} />}/> */}
        {/* <Route path='/posts/:id' component={Post}/> */}
        </Switch>
    </div>
)

export default Posts;