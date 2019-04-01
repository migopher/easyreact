import React, { Component } from 'react';
 
class HelloWorld extends Component {
    clickHander = () => {
        console.log(this.props);
        console.log(this.props.name);
    }
    render () {
        return (
            <div onClick={this.clickHander}>{ this.props.name } say: Hello World!</div>
        )
    }
}
 
export default HelloWorld;

