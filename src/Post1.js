import React from 'react';
import {items} from './post-data';

const Post1 = ({match}) =>{
    console.log(match);
    let number= parseInt(match.params.id,10)
    console.log(number);
    let x = items.find((item) => {
        console.log(item)
        // if(item.id == number)
        return item.id == number
    })
    if(x == undefined)
    return(
        <div>there is no such element</div>
    )
    console.log(x);
    return(
        <div className="Post">
            <div className="Post-title">{items[x.id].title}</div>
            <div className="Post-body">{items[x.id].body}</div>
            <div className="Post-userId">{items[x.id].userId}</div>
        </div>
    )
}

export default Post1;