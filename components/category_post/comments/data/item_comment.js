import React,{Component} from 'react';

class Comment_Item extends Component {


    render() {
      const props   = this.props;
      const content = props.content;
      const url     = props.url;

        return (
          <div className="item">
            <aside className="right">
              <div className="user right">
                <div className="avatar ">
                  <img src={url + `icon/img/13636110_1609566669341404_1443645177_n.jpg`} className="user_default" alt="" />
                </div>
                <div className="info right">
                  <h3 className="title ">نام کاربر مشاور</h3>
                  <h3 className="one">{content.author_post}</h3>
                </div>
              </div>
            </aside>
            <aside className="left post_item">
              <div className="post">
                <div className="right nav-top">
                  <h3 className="title right">{content.title}</h3>
                  <div className="left date_time">
                    <div className="right like">
                      <img src={url + `icon/img/black-bubble-speech.svg`} className="Square right" alt="" />
                      <h3 className="Number right">۱۲۳۴۵۶</h3>
                      <div className="clear-fix" />
                    </div>
                    <div className="left dates">
                      <img src={url + `icon/img/calendar-page-empty.svg`} className="icon_calender right" alt="" />
                      <h3 className="Number right">3 آذر ماه 1395</h3>
                      <div className="clear-fix" />
                    </div>
                  </div>
                  <div className="clear-fix" />
                </div>
                <div className="clear-fix" />
              </div>
              <div className="descriptions">
                <div className="description">
                  متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت متن نظر در این قسمت
                </div>
                <img src={url + `icon/img/quotations.svg`} className="quotation right" alt="" />
              </div>
              <div className="backlight">
                <img src={url + `icon/img/arrow_forum.png`} alt="" />
              </div>
            </aside>
            <div className="clear-fix" />
          </div>
        );
    }
}


export default (Comment_Item);
