import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Main from '../components/Main.js'

class Deskripsi_1 extends Component {

  render() {
    
      return (
        <div className="container-fluid kotak">
                <h3> Hai {this.props.name}</h3>
        </div>

      );

    };

};

export default Deskripsi_1;
