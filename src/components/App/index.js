import React, {Component} from 'react';
import './App.css';
import Intro from '../Intro'


class Index extends Component{
  state = {
    series: []
  };

  componentDidMount() {
      const series = ["Vikings", "Game of Thrones"];

      setTimeout(() => {
          this.setState({series: series});
      }, 2000)
  }

    render() {
    return (
        <div className="App">
          <header className="App-header">
            Learn React
          </header>
          <Intro message="Here you can find all of your most favorite series" />
          The length of series array - {this.state.series.length}
        </div>
    );
  }


}

export default Index;
