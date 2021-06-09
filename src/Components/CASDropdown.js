import React, { Component } from 'react';

export default class componentName extends Component {

    constructor() {
        super()
        this.state = {
            DDL1: [],
            DDL2: [],
            selectddl: '',
        }
    }
    componentDidMount() {
        this.setState({
            DDL1: [
                { name: 'Colors', DDL2: ['red', 'green', 'blue', 'violent'] },
                { name: 'Fruits', DDL2: ['Mango', 'Banana', 'Apple', 'Lichee'] },
                { name: 'Sports', DDL2: ['Football', 'Cricket', 'blue', 'violent'] },
                { name: 'Country', DDL2: ['red', 'bangladesh', 'blue', 'India'] },
            ]
        })
    }

    selectChange(e) {
        this.setState({ selectddl: e.target.value })
        this.setState({ DDL2: this.state.DDL1.find(x => x.name === e.target.value).DDL2 })
        console.log(this.state.DDL1.find(x => x.name === e.target.value).DDL2);
        
    }

    render() {

        return (
            <div>
                <h3>How To Implement DDL </h3>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <hr />
                <select value={this.state.selectddl} onChange={this.selectChange.bind(this)} >
                    <option > ---Select--- </option>
                    {
                        this.state.DDL1.map(x => {
                            return <option> {x.name} </option>
                        })
                    }
                </select>

                <select>
                    <option selected disabled >----------</option>
                    {
                        this.state.DDL2.map(x => {
                            return <option > {x} </option>
                        })
                    }
                </select>

            </div>
        );
    }
}
