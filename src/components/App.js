import React from 'react'
import './App.css'

import Header from './Header'
import SearchField from './SearchField'
import BookList from './BookList'
// import BookRegister from './BookRegister'

import Grid from '@material-ui/core/Grid'

const styles = {
  gridContainer: {
    width: '100%',
    margin: 0
  },
  gridItem: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  }
}

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='App'>
        <Grid container spacing={32} direction='column' style={styles.gridContainer}>
          <Grid item style={styles.gridItem}>
            <Header />
          </Grid>
          <Grid item style={styles.gridItem}>
            <SearchField />
          </Grid>
          <Grid item style={styles.gridItem}>
            <BookList />
          </Grid>
        </Grid>
        {/* <BookRegister /> */}
      </div>
    )
  }
}

export default App
