import React,{Component} from 'react';
import Item_Subject from './data/item_subject';



 class List_Posts extends Component {
   componentWillMount() {
     this.List_Posts();
   }
   List_Posts(){
     const props      = this.props;
     const content    = props.content.Arry;
     const index_tab  = props.index + 1;



     this.item = content.map((text,index)=>{
       if (text.status_post == index_tab) {
         return(
           <Item_Subject key={text.id} content={text} url={props.url}></Item_Subject>
         )
       }
     })
   }
   componentWillReceiveProps(nextProps) {
     const props      = nextProps;
     const content    = props.content.Arry;
     const index_tab  = props.index + 1;

     this.item = content.map((text,index)=>{
       if (text.status_post == index_tab) {
         return(
           <Item_Subject key={text.id} content={text} url={props.url}></Item_Subject>
         )
       }
     })
   }
    render() {
        return (
            <div className='items'>
              {this.item}
            </div>
        );
    }
}


export default (List_Posts);
