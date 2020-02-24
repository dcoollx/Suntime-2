import React from 'react';

export default class clock extends React.Component{
  componentDidMount(){
    //start countdown
  }
  render(props){
    return(<div className="clock">
      <span className="digit">00:00</span> minutes untill [event]
    </div>);
  }
}