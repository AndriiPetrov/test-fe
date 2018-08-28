import React from 'react';
import './App.css';
import {items} from './post-data';
import NewsPage from './NewsPage';
// import axios from 'axios';

class App extends React.Component{
  // state = {
  //   posts: []
  // }

  // ComponentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/`)
  //     .then(res=> {
  //       const posts = res.data.children.map(obj => obj.data);
  //       this.setState({posts});
  //     })
  // }
  

  render(){
    return(
      <div className="App">
        <NewsPage items={items} />
      </div>
      // <div>
      //   <ul>
      //     {this.state.posts.map(post => (
      //       <li key={post.id}>{post.title}</li>
      //     ))}
      //   </ul>
      // </div>
    )
  }
}

export default App;