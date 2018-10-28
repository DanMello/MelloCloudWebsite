import React from 'react'
import axios from 'axios';

export function autocompleteSearchTest(value) {
    if (cancel != undefined) {
        cancel();
    }
    return axios.get(`https://jqueryui.com/resources/demos/autocomplete/search.php`, {
        cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancel = c;
        }),
        params: {
            q: value
        }
    })
        .then(response => {
            return response.data.response;
        })
        .catch(error => {
            const result = error.response;
            return Promise.reject(result);
        });
}

var CancelToken = axios.CancelToken;
var cancel;

export class AutoComplete extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({
            search: value
        });
        autocompleteSearchTest(value)
    }

    render() {
        return (
            <div className="App-intro Dialog-section">
                <h2>AutoComplete</h2>
                <div className="form-control">
                    <label htmlFor="password">Lookup :</label>
                    <input name="search" type="text" value={this.state.search}
                           onChange={this.handleSearchChange}
                           id="password" ref="password" placeholder="Enter line"/>
                </div>
            </div>
        )
    }
}

export default AutoComplete;
