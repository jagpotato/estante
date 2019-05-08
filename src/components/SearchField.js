import React from 'react'
import TextField from '@material-ui/core/TextField';

class SearchField extends React.Component {
  render () {
    return (
      <div className='SearchField'>
        <TextField
          label='Search Field'
          type='search'
        />
      </div>
    )
  }
}

export default SearchField
