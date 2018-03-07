import React, { Component } from 'react';
// import '../styles/Header.css';
import {Link,Route} from 'react-router-dom';
import Deskripsi_1 from '../components/Deskripsi_1.js'
import Main from '../components/Main.js'


class Header extends Component {
    render() {
        return (
            <div className="container-fluid kotak1">
                <div className="container-fluid" style={{padding:'0px'}}>
                    
                    <ul className="nav nav-tabs nav-justified">
                        <li className="active"><Link to='/Main'>Login</Link></li>
                        <li><Link to='/Deskripsi_1'>Welcome</Link></li>
                    </ul>
                </div><br/>
            </div>

        );
    }
}
export default Header;