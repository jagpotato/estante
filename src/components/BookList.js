import React from 'react'
// import {firestore} from '../firebase'
import blankImg from '../img/blank.jpg'
// 開発用
import {bookList} from './dummyBookData'

import BookThumbnail from './BookThumbnail'

import Grid from '@material-ui/core/Grid'

const styles = {
  gridContainer: {
    width: '100%',
    maxWidth: '1000px',
    margin: 0
  },
  card: {
    maxWidth: '128px',
    maxHeight: '180px'
  },
  media: {
    width: '128px',
    height: '180px'
  },
  boxList: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

class BookList extends React.Component {
  constructor (props) {
    super(props)

    this.firestore = props.firebase.firestore

    // dbから取得する用
    // this.state = {
    //   bookList: [{name: '', isLending: false, shopURL: '', thumbnailURL: blankImg}]
    // }
    // this.fetchBookDataFromDB()

    // 開発用
    this.state = {
      bookList: bookList
    }
  }

  fetchBookDataFromDB () {
    console.log('fetch book data from DB')
    // firestoreから本データの一覧を取得
    //- get ver
    // firestore.collection('books').get()
    //   .then((querySnapshot) => {
    //     const bookList = querySnapshot.docs.map(doc => doc.data())
    //     this.setState({bookList})
    //   })
    //- onSnapshot ver
    this.firestore.collection('books').onSnapshot((querySnapshot) => {
      const bookList = querySnapshot.docs.map(doc => doc.data())
      this.setState({bookList})
    })
  }

  render () {
    return (
      <div style={styles.boxList}>
        <Grid container spacing={40} style={styles.gridContainer}>
          {/* {this.state.bookList.map((book, i) => {
            return (
              <Grid item key={i} xs={6} sm={4} md={3} lg={2} style={styles.gridItem}>
                <BookThumbnail bookData={book} />
              </Grid>
            )
          })} */}
          {this.props.displayBookList.map((book, i) => {
            return (
              <Grid item key={i} xs={6} sm={4} md={3} lg={2} style={styles.gridItem}>
                <BookThumbnail bookData={book} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default BookList
