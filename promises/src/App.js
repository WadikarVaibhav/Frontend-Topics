import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    showDataFromUrl = () => {
        fetch('https://api.github.com/users/zq-jhon')
            .then(res => res.json()).then(json => {
                return {...this.state.data, json};
            }).then(res => {
                console.log(...this.state.data, res);
            }).catch(error => {
                console.log('Error occured')
            });
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                <button onClick={this.showDataFromUrl}>Load</button>
            </div>
        );
    }
}

export default App;
