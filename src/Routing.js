import React from 'react';
import {Route} from 'react-router-dom';
import Post from './Post';

const Routing = ({items}) => (
    // console.log(items)
    <div>
        {items.map(item => 
            <div key={item.id}>
                <Route path={`/${item.id}`} component={Post} />
            </div>
        )}
    </div>
)

export default Routing;