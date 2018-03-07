import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Deskripsi_1 from '../components/Deskripsi_1.js'

class Main extends Component {

    handleAdd = (e) => {
        e.preventDefault();
        if(this.refs.nama.value == true ){
            let user = {name: this.refs.nama.value};
            this.props.onAdd(user); // komunikasi ke parent
        }
    }
    
    render() {
        
        return (
        <div className="container-fluid kotak">
        <form className="input">
            <div className="form-group"><h2>Name:</h2>
                <input type="text" className="form-control" placeholder="Albert" name="search" ref="nama" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>{this.klik();}}>Submit</button>
            
        </form>
        </div>

        );
    }
}
export default Main;