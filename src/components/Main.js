import React, { Component } from 'react';

class Main extends Component{

    constructor(props){

        super(props)

    }

    render(){
        return(
            <React.Fragment>
            <p className="parag10">parag 1</p>
            <br/>
            <hr/>
            <p className="parag20">parag 2</p>
            </React.Fragment>
        )
    }
}

export default Main