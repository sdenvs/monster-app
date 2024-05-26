// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/cardList'
import SearchContainer from './components/search-box/SearchContainer'
import { useState, useEffect } from 'react';

const App = () => {

  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);

  const onSearch = (event) => {
    setSearchText(event.target.value)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users)
      })
  }, [])



  return (
    <div className="App">
      <div>
        <h1>Monster Rolodex</h1>
      </div>
      <SearchContainer onSearch={onSearch} />
      <div className='w-100 d-flex flex-wrap mt-5 justify-content-center'>
        {monsters.filter(monst => { return monst.name.toLowerCase().includes(searchText.toLowerCase()) }).map(monster => {
          return <CardList key={monster.id} name={monster.name} />
        })}
      </div>
    </div>
  );

}

// class App1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchText: '',
//       monsters: [

//       ]
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) => {
//         this.setState(() => { return { monsters: users } })
//       })
//   }

//   onSearch = (event) => {
//     debugger
//     this.setState({ searchText: event.target.value })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <h1>Monster Rolodex</h1>
//         </div>
//         <SearchContainer onSearch={this.onSearch} />
//         <div className='w-100 d-flex flex-wrap mt-5 justify-content-center'>
//           {this.state.monsters.filter(monst => { return monst.name.toLowerCase().includes(this.state.searchText.toLowerCase()) }).map(monster => {
//             return <CardList key={monster.id} name={monster.name} />
//           })}
//         </div>
//       </div>
//     );
//   }

// }

export default App;
