import React, {Component} from 'react';
import './App.css';
import Series from '../../containers/Series';
import Intro from '../Intro'
import 'whatwg-fetch';


class Index extends Component{

    render() {
    return (
        <div className="App">
          <header className="App-header">
            Learn React
          </header>
          <Intro message="Here you can find all of your most favorite series" />
          <Series />
        </div>
    );
  }


}

export default Index;
