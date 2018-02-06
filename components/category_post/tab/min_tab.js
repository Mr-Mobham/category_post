import React,{Component} from 'react';
import Tab_Li from './data/tab_li';



 class Min_Tab extends Component {
   componentWillMount() {
     this.Tab();
   }
   Tab(){
     const props = this.props;
     this.tab  = props.tab.Arry.map((text,index)=>{
       return(
         <Tab_Li key={text.id} content={text} index={index} Index_Tab={this.Index_Tab.bind(this)}></Tab_Li>
       )
     })
   }
   Index_Tab(index,selected){
     const props = this.props;
     props.Index_Tab(index,selected);
   }
   componentWillReceiveProps(nextProps) {
       this.Update_Tab(nextProps);
   }
   Update_Tab(nextProps){
     const props = nextProps;
     this.tab  = props.tab.Arry.map((text,index)=>{
       return(
         <Tab_Li key={text.id} content={text} index={index} Index_Tab={this.Index_Tab.bind(this)}></Tab_Li>
       )
     })
   }

    render() {
      const props   = this.props;
      let index     = props.tab.Tab_Index;
      if (index.length == 0) {
        index = 0;
      }
        return (
          <div>
              <div className="titles">
                <div className="right list-post_send">
                  <ul>
                    {this.tab }
                  </ul>
                </div>
                <div className="clear-fix" />
              </div>
              {props.children[index]}
          </div>
        );
    }
}


export default(Min_Tab);
