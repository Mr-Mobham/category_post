import React,{Component} from 'react';
import Nav_Top from '../global/nav_top';
import Content from './content';
import { connect } from 'react-redux';



 class Container extends Component {
   componentWillMount() {

    this.Inital();
    this.Update();
   }
   Inital(){
     const props     = this.props;
     const id_params = props.id_params;

     props.Notification(props.notification);
     props.Tab_Notification(props.tab);
     props.List_Post(props.list_posts,id_params);
   }
   Update(){

     this.Tab();
   }
   Tab(){
     const props      = this.props;
     const id_params  = parseInt(props.id_params) - 1;

     props.TAB_INDEX(id_params)
     props.Tab_Select(id_params);
   }
    render() {
      const props = this.props;

        return (
          <section className="container margin--top">
            <Nav_Top url={props.url}></Nav_Top>
             <Content
               url                 = {props.url}
               notification        = {props.notification}
               tab                 = {props.tab}
               list_posts          = {props.list_posts}
              >
              </Content>
          </section>
        );
    }
}


const mapDispatchToProps = (dispatch,props) =>{
  return{
      Notification:(data)=>{
        dispatch({
          type : 'TTT',
          data : data
      });
    },
      Tab_Notification:(data)=>{
        dispatch({
          type : 'Tab_Notification',
          data : data
      });
    },
    List_Post:(data,index)=>{
      dispatch({
        type   : 'LIST--POSTS',
        data   : data,
        index  : index
    });
  },
    TAB_INDEX:(data)=>{
      dispatch({
        type : 'TAB_INDEX',
        index : data
    });
  },
  Tab_Select:(_index)=>{
    dispatch({
        type  : 'Tab_Update',
        index : _index
    });
  },

}

};


export default connect(null,mapDispatchToProps)(Container)
