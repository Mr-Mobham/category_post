import React,{Component} from 'react';


class Tab_Li extends Component {

  Tab(event){
    const props    = this.props;
    const index    = props.index;
    const selected = props.content.selected;

    props.Index_Tab(index,selected);
    event.preventDefault();

  }
    render() {
      const props    = this.props;
      const content  = props.content;
      const selected = props.content.selected;
      let className  = '';

      if (selected) {
        className = 'selected';
      }

        return (
          <li className={className} onClick={this.Tab.bind(this)}>
            <a href="#">{content.title} </a>
          </li>
        );
    }
}



export default (Tab_Li);
