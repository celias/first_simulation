import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div className="App">
            <NavLink to ="/bins/1"><button>Shelf A</button></NavLink>
            <NavLink to ="/bins/2"><button>Shelf B</button></NavLink>
            <NavLink to ="/bins/3"><button>Shelf C</button></NavLink>
            <NavLink to ="/bins/4"><button>Shelf D</button></NavLink>
            </div>
        )
    }
}
export default Home;