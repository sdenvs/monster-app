// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      monsters: [

      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => { return { monsters: users } })
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Monster Rolodex</h1>
        </div>
        <div>
          <input type='search' placeholder='type to search' onChange={(event) => {
            this.setState({ searchText: event.target.value })
          }} />
        </div>
        <div>
          {this.state.monsters.filter(monst => { return monst.name.toLowerCase().includes(this.state.searchText.toLowerCase()) }).map(monster => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })}
        </div>
      </div>
    );
  }

}

export default App;
