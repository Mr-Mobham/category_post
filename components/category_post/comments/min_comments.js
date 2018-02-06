import React,{Component} from 'react';
import Comment_Item from './data/item_comment';



 class Comments extends Component {
   componentWillMount() {
     const props     = this.props;
     const content   = props.content;
     const Index_Tab = props.index + 1;
     const url       = props.url;

     this.item = content.Arry.map((text,index)=>{
       if (text.status_post == Index_Tab) {
         return(
           <Comment_Item key={text.id} content={text} url={url}></Comment_Item>
         )
       }
     })
   }
   componentWillReceiveProps(nextProps) {
     const props     = this.props;
     const content   = props.content;
     const Index_Tab = props.index + 1;
     const url       = props.url;

     this.item = content.Arry.map((text,index)=>{
       if (text.status_post == Index_Tab) {
         return(
           <Comment_Item key={text.id} content={text} url={url}></Comment_Item>
         )
       }
     })
   }
    render() {
      const props    = this.props;

        return (
          <div className="items"> {/* Answer posted */}
            {this.item}
          </div>
        );
    }
}
export default (Comments);
