import React from 'react'
import './App.css'
import Firebase from '../firebase'
// 開発用
import {bookList} from './dummyBookData'

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
  constructor (props) {
    super(props)

    this.firebase = new Firebase()
    this.state = {
      isSignIn: false,
      displayBookList: []
    }
  }

  componentDidMount () {
    this.setState({
      displayBookList: bookList
    })
  }

  updateDisplayBookList (displayBookList) {
    this.setState({displayBookList})
  }

  updateSignInState (isSignIn) {
    this.setState({isSignIn})
  }

  render () {
    return (
      <div className='App'>
        <Grid container spacing={32} direction='column' style={styles.gridContainer}>
          <Grid item style={styles.gridItem}>
            <Header firebase={this.firebase} isSignIn={this.state.isSignIn} updateSignInState={(isSignIn) => this.updateSignInState(isSignIn)} />
          </Grid>
          {/* 要ログイン */}
          {/* {this.state.isSignIn &&
            <Grid item style={styles.gridItem}>
              <SearchField />
            </Grid>
          }
          {this.state.isSignIn &&
            <Grid item style={styles.gridItem}>
              <BookList firebase={this.firebase} />
            </Grid>
          } */}
          {/* ログイン不要 */}
          <Grid item style={styles.gridItem}>
            <SearchField bookList={bookList} updateDisplayBookList={(displayBookList) => this.updateDisplayBookList(displayBookList)} />
          </Grid>
          <Grid item style={styles.gridItem}>
            <BookList firebase={this.firebase} displayBookList={this.state.displayBookList} />
          </Grid>
        </Grid>
        {/* <BookRegister /> */}
      </div>
    )
  }
}

export default App
