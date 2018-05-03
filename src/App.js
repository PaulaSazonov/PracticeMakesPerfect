import React from 'react';
import Luettelo from './Luettelo';
import Lisayslomake from './Lisayslomake';
import Filtteri from './Filtteri';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }


  addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number : this.state.newNumber
    }
    if(!this.state.persons.some(ps=> ps.name ===personObject.name)){
      const persons = this.state.persons.concat(personObject)

      this.setState({
      persons,
      newName: '',
      newNumber: ''
      })
    } else{
      alert("Nimi on jo luettelossa")
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }
  handleFilterInput = (event) => {
    this.setState({filter: event.target.value});
  }
  deletePerson = (key) => {
    const newList = this.state.persons.filter(ps => ps.name !== key);
    this.setState({persons: newList});

  }

  render() {
    const filtered =
    this.state.filter ?
    this.state.persons.filter(ps => ps.name.toLowerCase().includes(this.state.filter.toLowerCase())===true) : this.state.persons;
    return (
      <div className="container">
        <h1>Puhelinluettelo</h1>
        <ul>
          <Luettelo persons={filtered}
          delete={this.deletePerson}/>
        </ul>
        <p>(Poista luettelosta nimeä klikkaamalla)</p>
        <h4>Lisää luetteloon:</h4>
        <div id="lomakecontainer">
          <Lisayslomake addName={this.addName}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
          newName={this.state.newName}
          newNumber={this.state.newNumber}/>
        </div>

        <Filtteri className="filtteri" filter={this.state.filter}
        handleFilterInput={this.handleFilterInput}/>
      </div>
    )
  }
}

export default App;