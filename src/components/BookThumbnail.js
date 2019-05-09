import React from 'react'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Badge from '@material-ui/core/Badge'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Link from '@material-ui/core/Link'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const styles = {
  book: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  card: {
    maxWidth: '128px',
    maxHeight: '180px'
  },
  media: {
    width: '128px',
    height: '180px'
  },
  dialogTitle: {
    textAlign: 'center'
  }
}

class BookThumbnail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lendingStatusBadge: {
        color: 'primary',
        content: '棚'
      },
      isBookDataDialogOpen: false
    }
  }

  componentDidMount () {
    let lendingStatusBadge = {color: '', content: ''}
    lendingStatusBadge.color = this.props.bookData.isLending ? 'error' : 'secondary'
    lendingStatusBadge.content = this.props.bookData.isLending ? '貸' : '棚'
    this.setState({lendingStatusBadge})
  }

  openBookDataDialog () {
    this.setState({
      isBookDataDialogOpen: true
    })
  }

  closeBookDataDialog () {
    this.setState({
      isBookDataDialogOpen: false
    })
  }

  render () {
    return (
      // <li>
      //   {/* {this.props.bookData.name} */}
      //   <img src={this.props.bookData.thumbnailURL} />
      // </li>
      <div style={styles.book}>
        <Badge color={this.state.lendingStatusBadge.color} badgeContent={this.state.lendingStatusBadge.content}>
          <Card style={styles.card}>
            <CardActionArea onClick={() => this.openBookDataDialog()}>
              <CardMedia
                image={this.props.bookData.thumbnailURL}
                title={this.props.bookData.name}
                style={styles.media}
              />
            </CardActionArea>
          </Card>
        </Badge>
        <Dialog
          open={this.state.isBookDataDialogOpen}
          onClose={() => this.closeBookDataDialog()}
          fullWidth={true}
          maxWidth={'md'}
        >
          <DialogTitle style={styles.dialogTitle}>
            <img src={this.props.bookData.thumbnailURL} alt={this.props.bookData.name} />
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              タイトル
            </DialogContentText>
            <DialogContentText variant='body1' color='textPrimary'>
              {this.props.bookData.name}
            </DialogContentText>
            <Divider />
            <DialogContentText>
              状態
            </DialogContentText>
            {this.props.bookData.isLending
              ?
              <DialogContentText variant='body1' color='error'>
                貸し出し中
　            </DialogContentText>
              :
              <DialogContentText variant='body1' color='secondary'>
                本棚
　            </DialogContentText>
            }
            <Divider />
            <DialogContentText>
              貸し出しボタン
            </DialogContentText>
            {/* <Table padding={'dense'}>
              <TableBody>
                <TableRow>
                  <TableCell component='th'>タイトル</TableCell>
                  <TableCell>{this.props.bookData.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>状態</TableCell>
                  <TableCell>d</TableCell>
                </TableRow>
              </TableBody>
            </Table> */}
          </DialogContent>
          <DialogActions>
            <Link color='secondary' href={this.props.bookData.shopURL} target='_blank' rel='noopener'>Amazon link</Link>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default BookThumbnail
