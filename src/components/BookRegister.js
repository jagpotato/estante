import React from 'react'
import {firestore} from '../firebase'
import axios from 'axios'

class BookRegister extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bookName: '',
      isLending: false,
      shopURL: '',
      thumbnailURL: ''
    }
  }

  async addBookToDB () {
    const thumbnailURL = await this.fetchBookThumbnailURL(this.state.bookName)
    this.setState({
      thumbnailURL: thumbnailURL
    })
    const bookData = {
      name: this.state.bookName,
      isLending: this.state.isLending,
      shopURL: this.state.shopURL,
      thumbnailURL: this.state.thumbnailURL
    }
    firestore.collection('books').add(bookData)
  }

  async fetchBookThumbnailURL (bookName) {
    const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q='
    try {
      const response = await axios.get(googleBooksAPI + bookName)
      const thumbnailURL = response.data.items[0].volumeInfo.imageLinks.thumbnail
      return thumbnailURL
    } catch (error) {
      console.error(error)
    }
  }

  handleChangeBookName (event) {
    this.setState({
      bookName: event.target.value
    })
  }

  handleChangeShopURL (event) {
    this.setState({
      shopURL: event.target.value
    })
  }

  render () {
    return (
      <div>
        <label>本のタイトル：
          <input
            type='text'
            value={this.state.bookName}
            onChange={(e) => this.handleChangeBookName(e)}
          />
        </label>
        <label>Amazon URL：
          <input
            type='text'
            value={this.state.shopURL}
            onChange={(e) => this.handleChangeShopURL(e)}
          />
        </label>
        <button onClick={() => this.addBookToDB()}>登録</button>
      </div>
    )
  }
}

export default BookRegister
