import React from 'react';
import Clock from '../components/clock.js';
import Info from '../components/info.js'

import logoReact from '../logo.svg';
import logoCordova from '../logo-cordova.png';


export default class Index extends React.Component {

    render() {
        return <div className="App">
            <header className="App-header">
            <h1>Suntime</h1>
            </header>
            <main>
            <progress id="main" max = "100" min="1" step="1" value="50"/>
            <Clock/>
            <Info/>
            </main>
            <footer>
              <div className="controls">
                <button>Settings</button>
                <button>Refresh</button>
              </div>
            </footer>
        </div>
    }
}