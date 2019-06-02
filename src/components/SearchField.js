import React from 'react'
import TextField from '@material-ui/core/TextField';

class SearchField extends React.Component {
  filterList (event) {
    const filteredBookList = this.props.bookList.filter((book) => {
      return book.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    })
    this.props.updateDisplayBookList(filteredBookList)
  }

  render () {
    return (
      <div className='SearchField'>
        <TextField
          label='Search Field'
          type='search'
          onChange={(event) => {this.filterList(event)}}
        />
      </div>
    )
  }
}

export default SearchField
