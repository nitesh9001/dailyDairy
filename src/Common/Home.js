import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="mainConatiner" >
                  {this.props.children}
            </div>
        );
    }
}

export default Home;
