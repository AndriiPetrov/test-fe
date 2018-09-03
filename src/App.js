import React from 'react';
import './App.css';
import {items} from './post-data';
import NewsPage from './NewsPage';
import Posts from './Posts';
import Home from './Home';
import {Route, Link} from 'react-router-dom';
import Routing from './Routing';

class App extends React.Component{

  state = {
    news: [],
    title: '',
  }

  addNews = (item) =>{
    console.log(item);
    this.setState({
      news: [...this.state.news, item]
    })
  }
  // onSubmit = (event) =>{
  //   this.setState({
  //     news: this.state.news
  //   })

  // }
  inputTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  render(){
    // console.log(this.state.news)
    return(
      <div className="App">
      {/* <Form title={this.state.title} inputTitle={this.addNews}/> */}
      123
      <div>{this.state.title}</div>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/p'>Newspage</Link></li>
            <li><Link to='/posts'>Title</Link></li>
          </ul>
        </div>
        <hr/>
        <div>
          <Route exact path='/' render={() => <Home title={this.state.title} onSubmite={this.addNews} inputTitle={this.inputTitle} />} />
          <Route path='/p' render={() => <NewsPage items={items}/>}/>
          {/* <Route path='/posts' render={() => <Routing items={items}/>}/> */}
          <Route path='/posts' render={() => <Posts items={items}/>}/>
          
        {/* <Posts /> */}
        </div>
      </div>
    )
  }
}

export default App;