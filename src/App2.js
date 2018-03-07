import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js'
import Deskripsi_1 from './components/Deskripsi_1.js'
import {Link,Route} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {userLists:""};
  }

  add = (user) => {
    this.setState({ userLists: this.refs.nama.value})
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid kotak1">
                <div className="container-fluid" style={{padding:'0px'}}>
                    
                    <ul className="nav nav-tabs nav-justified">
                        <li className="active"><Link to='/Main'>Login</Link></li>
                        <li><Link to='/Deskripsi_1'>Welcome</Link></li>
                    </ul>
                </div><br/>
        </div>
        <Route exact path='/' component={Main}/>
        <Route path='/Main' component={Main}/>
        <Route path='/Deskripsi_1' component={Deskripsi_1}/>
      </div>
    );
  }
}

export default App;
