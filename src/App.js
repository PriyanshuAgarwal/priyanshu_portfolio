import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

class App extends Component {

 /* renderIcons() {
    return _.map(this.state.models, (model) => {
      return (<SidebarIcon
        onChange={this.changeView}
        modelName={model.name}
        icon={model.icon}
        isActive={this.state.activeView === model.name} 
      />)
    })
  } */

render() {
  return (
    <div className="container">
        <Header></Header>
        <Content></Content>
    </div>
  );
}
 
}

export default App;
