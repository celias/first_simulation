import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


class ShelfA extends Component {
    constructor(props) {
        super(props)

        this.state={
            shelfArr: [],
            id: this.props.match.params.id
        }
    }
    componentDidMount () {
    axios.get(`/api/shelf/${this.state.id}`).then(response=>{
        console.log(response)
        this.setState({
            shelfArr: response.data
        })
    })
    }

    render(){
        let binOneChoice = (!this.state.shelfArr.bin_id) ? (<NavLink to={`/create/${this.state.id}${this.state.id}`}><button></button></NavLink>) : (<NavLink to={`/bins/${this.state.id}${this.state.id}`}><button></button></NavLink>) 
        return(
            <div>
                {binOneChoice}
            </div>
        )
    }
}
export default ShelfA