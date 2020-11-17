// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
    focus = () => {
        console.log('Good!')
    }
    blur = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
    
                <button onFocus={this.focus} onBlur={this.blur}>Eyes On Me</button>
            </div>
        )
    }
}