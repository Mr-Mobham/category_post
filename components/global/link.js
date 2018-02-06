import React,{Component} from 'react';

 class Link_ extends Component {

    render() {
      const props = this.props;
      const url   = props.url;
        return (
          <div className="Links">
              <div className="wrapper">
                <div className="right Link">
                  <img src={url + `icon/img/link-symbol.svg`} className="link_symbool right"  />
                  <h3 className="title right">لینک های مفید</h3>
                  <ul className="right">
                    <li>
                      <a href="#">پرتال</a>
                    </li>
                    <li>
                      <a href="#"> فروم (انجمن)</a>
                    </li>
                    <li>
                      <a href="#">فروشگاه</a>
                    </li>
                    <li>
                      <a href="#">باشگاه مشتريان</a>
                    </li>
                    <li>
                      <a href="#">درباره بي نظير</a>
                    </li>
                    <li>
                      <a href="#">تماس با م</a>
                    </li>
                  </ul>
                </div>
                <div className="right Link">
                  <img src={url + `icon/img/profile.svg`} className="icon_profile right"  />
                  <h3 className="title right">پروفایل</h3>
                  <ul className="right">
                    <li>
                      <a href="#">مشخصات من</a>
                    </li>
                    <li>
                      <a href="#"> خرید های من</a>
                    </li>
                    <li>
                      <a href="#">سبد خرید</a>
                    </li>
                    <li>
                      <a href="#">نظرات من</a>
                    </li>
                    <li>
                      <a href="#">لیست فاکتورها</a>
                    </li>
                    <li>
                      <a href="#">خروج</a>
                    </li>
                  </ul>
                </div>
                <div className="right Link">
                  <img src={url + "icon/img/map.svg"} className="map right"  />
                  <h3 className="title right">تماس با ما</h3>
                  <ul className="right">
                    <li>
                      <a href="#">تهران خیابان..</a>
                    </li>
                    <li>
                      <a href="#">تلفن:135468797</a>
                    </li>
                    <li>
                      <a href="#">همراه: 02165464</a>
                    </li>
                    <li>
                      <a href="#">کدپستی:154654</a>
                    </li>
                    <li>
                      <a href="#">کدپستی:154654</a>
                    </li>
                  </ul>
                </div>
                <div className="right social-network">
                  <img src={url + "icon/img/share.svg"} className="shape right"  />
                  <h3 className="title right">شبکه های اجتماعی</h3>
                  <div className="clear-fix" />
                  <div className="socials">
                    <span className="bg right">
                      <a href="#">
                        <img src={url + "icon/img/linkedin-letters.svg"} className="linkdin"/>
                      </a>
                    </span>
                    <span className="bg right">
                      <a href="#">
                        <img src={url + "icon/img/facebook-logo.svg"} className="icon"  />
                      </a>
                    </span>
                    <span className="bg right">
                      <a href="#">
                        <img src={url + "icon/img/youtube-logo.svg"} className="icon" />
                      </a>
                    </span>
                    <span className="bg right bg-instagram">
                      <a href="#">
                        <img src={url + "icon/img/instagram-logo.svg"} className="instagram"  />
                      </a>
                    </span>
                    <span className="bg right">
                      <a href="#">
                        <img src={url + "icon/img/rss-symbol.svg"} className="icon"  />
                      </a>
                    </span>
                    <span className="bg right">
                      <a href="#">
                        <img src={url + "icon/img/skype-logo.svg"} className="icon"  />
                      </a>
                    </span>
                    <span className="bg right">
                      <a href="#">
                        <img src={url + "icon/img/twitter-social-network-logo.svg" }className="icon"  />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="clear-fix" />
            </div>
        );
    }
}

export default(Link_);
