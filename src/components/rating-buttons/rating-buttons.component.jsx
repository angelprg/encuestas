import React from "react";

import "./rating-buttons.styles.scss";
import StarIcon from "../start-icon/star-icon";

class RatingButtons extends React.Component {

constructor(props){
  super(props);
  this.state = {
    buttons:
    [
      {_id:1, classes:""},
      {_id:2, classes:""},
      {_id:3, classes:""},
      {_id:4, classes:""},
      {_id:5, classes:""}
    ],
    lastClicked : null
  };
}

  onRatingClick(selected){
    const {buttons} = this.state;
    this.setState({
      buttons : buttons.map(b => ({_id:b._id, classes:(b._id<=selected) ? `n_${b._id}` :""})),
      lastClicked : selected
    });
  }

  handleAnimationEnd(id){
    const {lastClicked, buttons} = this.state;
    if (id===lastClicked){
      this.props.handleRatingClick(lastClicked);
      this.setState({
        buttons:buttons.map(b => ({_id:b._id, classes:""})),
        lastClicked : null
      });
      
    }
  }

  render(){
    return (
      <div className="rating-buttons">
        {this.state.buttons.map(i => {
          return (
            <div key={i._id}  onClick={() => this.onRatingClick(i._id)}>
              <StarIcon classes={i.classes} handleAnimationEnd={()=>this.handleAnimationEnd(i._id)}/>
            </div>
          );
        })}
      </div>
    );
  }
}
export default RatingButtons;
