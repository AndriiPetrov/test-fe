import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsPage from './NewsPage';
import Post from './Post';
import Routing from './Routing';
import Post1 from './Post1';

const Posts = ({items}) => (
    <div>
        {/* <Switch> */}
        <Route exact path='/posts' render={() => <Routing items={items}/>}/>
        <div>
            <Route path='/posts/:id' component={Post1}/>
        </div> 
        {/* {items.map(item => 
        // if(item.id = )
        <div key={item.id}>
            <Route path='/posts/:id' render={(props) => <Post {...props} item={item} />}/>
        </div>
        )} */}
        {/* <Route path='/posts/:id' render={() => <Post item={item} />}/> */}
        {/* <Route path='/posts/:id' component={Post}/> */}
        {/* </Switch> */}
    </div>
)

export default Posts;