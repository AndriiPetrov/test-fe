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
    news: items,
  }

  addNews = (news) =>{
    this.setState({
      news: [...this.state.news, news.id]
    })
  }

  render(){
    return(
      <div className="App">
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/p'>Newspage</Link></li>
            <li><Link to='/posts'>Title</Link></li>
          </ul>
        </div>
        <hr/>
        <div>
          <Route exact path='/' render={() => <Home/>} />
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