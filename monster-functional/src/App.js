import React, { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-bar/search-box'

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => setMonsters(user))
  }, [searchField])

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    setSearchField(searchField)
  }

  console.log(monsters)
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Index</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder='Search Monsters'
        className='monsters-search-box'
      />
      <CardList
        monsters={monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField)
        })}
      />
    </div>
  )
}

export default App
