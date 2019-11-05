import React from "react";

import "./rating-buttons.styles.scss";
import StarIcon from "../start-icon/star-icon";

const RatingButtons = ({ current, onRatingClick }) => {
  return (
    <div className="rating-buttons">
      {[1, 2, 3, 4, 5].map(i => {
        const classAnimate = current <= i ? `n_${i}` : "";
        return (
          <div key={i} class="starContainer" onClick={() => onRatingClick(i)}>
            <StarIcon className={classAnimate} />
          </div>
        );
      })}
    </div>
  );
};

export default RatingButtons;
