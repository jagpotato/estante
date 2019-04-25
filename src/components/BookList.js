import React from 'react'
import {firestore} from '../firebase'

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
    // dbから取得する用
    // this.state = {
    //   bookList: [{name: '', isLending: false, shopURL: '', thumbnailURL: ''}]
    // }
    // this.fetchBookDataFromDB()

    // 開発用
    this.state = {
      bookList: [
        {
          name: 'ゼロから作るDeep Learning ―Pythonで学ぶディープラーニングの理論と実装',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/gp/product/4873117585?pf_rd_p=3d322af3-60ce-4778-b834-9b7ade73f617&pf_rd_r=11TS6TXVKJDJDA29DJF8',
          thumbnailURL: 'http://books.google.com/books/content?id=tbZQvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: 'コンピュータハイジャッキング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%8F%E3%82%A4%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0-%E9%85%92%E4%BA%95-%E5%92%8C%E5%93%89/dp/4274222748?pd_rd_w=oVRbI&pf_rd_p=ad592ab2-b545-45e2-8625-ce25d30413f2&pf_rd_r=NSCPGG1VTGYZQ19G38RA&pd_rd_r=2bbab2be-e28d-46b4-9f4f-5786699a479e&pd_rd_wg=kwHOw&ref_=pd_gw_psimh',
          thumbnailURL: 'http://books.google.com/books/content?id=C7xwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        {
          name: 'ドローン産業応用のすべて―開発の基礎から活用の実際まで―',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E7%94%A3%E6%A5%AD%E5%BF%9C%E7%94%A8%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E2%80%95%E9%96%8B%E7%99%BA%E3%81%AE%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E6%B4%BB%E7%94%A8%E3%81%AE%E5%AE%9F%E9%9A%9B%E3%81%BE%E3%81%A7%E2%80%95-%E9%87%8E%E6%B3%A2-%E5%81%A5%E8%94%B5/dp/4274506843/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3+%E5%BF%9C%E7%94%A8&qid=1556120889&s=books&sr=1-1-catcorr',
          thumbnailURL: 'http://books.google.com/books/content?id=SXXPtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: true,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: true,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: true,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        {
          name: '退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング',
          isLending: false,
          shopURL: 'https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X/ref=pd_sbs_14_3/357-3667057-3365403?_encoding=UTF8&pd_rd_i=487311778X&pd_rd_r=e33c73a4-6699-11e9-b2b2-652bfb501ec9&pd_rd_w=yxjYw&pd_rd_wg=X19lg&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=J8R1PEBYGRTE3WGYTEG5&psc=1&refRID=J8R1PEBYGRTE3WGYTEG5',
          thumbnailURL: 'http://books.google.com/books/content?id=arxEswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
      ],
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
    firestore.collection('books').onSnapshot((querySnapshot) => {
      const bookList = querySnapshot.docs.map(doc => doc.data())
      this.setState({bookList})
    })
  }

  render () {
    return (
      <div style={styles.boxList}>
        <Grid container spacing={40} style={styles.gridContainer}>
          {this.state.bookList.map((book, i) => {
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
