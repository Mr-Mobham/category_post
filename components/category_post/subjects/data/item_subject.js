import React,{Component} from 'react';



 class Item_Subject extends Component {

    render() {
      const props   = this.props;
      const content = props.content;
      const url     = props.url;

        return (
          <div className="post-create">
            <div className="right subject">
              <span className="right Square" />
              <h3 className="title right">{content.title}</h3>
              <div className="clear-fix" />
            </div>
            <div className="left col">
              <img src={url + `icon/img/file.svg`} className="file_icon right" alt="" />
              <h3 className="last-post-user right">آخرین پست توسط:</h3>
              <h3 className="user_title right">1395/11/5</h3>
              <div className="clear-fix" />
            </div>
            <div className="clear-fix" />
          </div>
        );
    }
}


export default (Item_Subject);
