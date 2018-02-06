import React from 'react'
import connect from 'next-redux-wrapper'
import { initStore
}
from './store_category_post';
import axios from 'axios';
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/category_post/container';



class Category_Post extends React.Component {
  static async getInitialProps ({ isServer , query}) {
    let status = '';
    const url  = 'http://127.0.0.1:8000/';

    const notification_url = url + 'notification';
    const notification_res = await axios({
      method : 'get',
      url    : notification_url
    });


    const tab_url = url + 'notification_tab';
    const tab_res = await axios({
      method : 'get',
      url    : tab_url
    });


    const list_posts_url = url + 'answer_posts/1' + '/' + query.id;
    const list_posts_res = await axios({
      method : 'get',
      url    : list_posts_url
    });




    return{
      isServer,
      url         : url,
      id_params   : query.id,
      notification: notification_res.data.data,
      tab         : tab_res.data.data,
      list_posts  : list_posts_res.data
    }
  }
  componentWillMount() {
    const props = this.props;

    // console.log(props);
  }

  render() {
    const props = this.props;

    return (
      <div>
        <Head_ ></Head_>
        <Header
          url={props.url}
         >
         </Header>
         <Container
            notification = {props.notification}
            url          = {props.url}
            tab          = {props.tab}
            list_posts   = {props.list_posts}
            id_params    = {props.id_params}
          >
          </Container>

        <Footer
          url={props.url}
        >
        </Footer>
      </div>
    );
  }
}


export default connect(initStore)(Category_Post)
