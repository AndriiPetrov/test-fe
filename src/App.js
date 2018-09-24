import React from 'react';
import './App.css';
import {items} from './post-data';
import NewsPage from './NewsPage';
import Posts from './Posts';
import Home from './Home';
import {Route, Link} from 'react-router-dom';
import Form from './Form';
import Routing from './Routing';

class App extends React.Component{
  // constructor(props){}
  state = {
    data: items,
  }

  removeArticle = index =>{
    const {data} = this.state

    this.setState({
      data: data.filter((item, i) => {
        return i !== index;
      })
    })
  }
   
  handleSubmit = arcticle => {
    this.setState({
      data: [...this.state.data, arcticle]
    })
  }

  render(){
    // console.log(this.state.news)
    return(
      <div className="App">
      {/* <Form handleSubmit={this.handleSubmit}/> */}
      123
      <div>{this.state.title}</div>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/p'>Newspage</Link></li>
            <li><Link to='/posts'>Title</Link></li>
            <button><Link to='/form'>Add Article</Link></button>
          </ul>
        </div>
        <hr/>
        <div>
          <Route exact path='/' render={() => <Home title={this.state.title} onSubmite={this.addNews} inputTitle={this.inputTitle} />} />
          <Route path='/p' render={() => <NewsPage items={this.state.data} removeArticle={this.removeArticle}/>}/>
          {/* <Route path='/posts' render={() => <Routing items={items}/>}/> */}
          <Route path='/posts' render={() => <Posts items={items}/>}/>
          <Route path='/form' render={() => <Form handleSubmit={this.handleSubmit}/>}/>
        </div>
      </div>
    )
  }
}

export default App;