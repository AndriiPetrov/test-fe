import React from 'react';
import { Link} from 'react-router-dom';
// import {items} from './post-data.js';
// import Post from './Post';
import {Route} from 'react-router-dom';
import Post from './Post';

const Routing = ({items}) => {
    // console.log(items);
    return(
    <div>
        <div>
            {items.map(item => 
                <div key={item.id}>
                    <Link to={`/posts/${item.id}`}>{item.title}</Link>
                </div>
            )}
        </div>
        <div>
            {items.map(item => 
                <div key={item.id}>
                    <Route path='/posts/:id' render={() => <Post item={item} />}/>
                </div>
            )}
        </div>
    </div>
    )
}

export default Routing;