import React,{Component} from 'react';
import Item_Message from './data/item_message';


 class Private_Comment extends Component {

    render() {
      const props   = this.props;
      const show    = props.d_show;
        return (
          <div className="items">  {/* Private Msg */}
            <Item_Message></Item_Message>
          </div>
        );
    }
}



export default (Private_Comment);
