// Code Keypad Component Here
import React from 'react'
class Keypad extends React.Component{
    
    keyUp = ()=> {
        console.log("Entering password...")
    }
    render(){
        return(
            <input onKeyUp={this.keyUp} type="password" />
            // <h1>Hello</h1>
        )
    }
}
export default Keypad;