import React from "react";

import "./star-icon.scss";

const StarIcon = ({ classes, handleAnimationEnd }) => 
  <svg className={`star-icon ${classes}`} onAnimationEnd={handleAnimationEnd}>
    <defs>
      <filter
        id="dropShadow"
        width="111.9%"
        height="212.1%"
        x="-5.8%"
        y="-58.6%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="10" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="3"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      //fill={fillColor} //"#e30613"
      //fillOpacity="0.0"
      //fillRule="evenodd"
      //stroke={strokeColor}
      //stroke="#e30613"
      //strokeWidth="2"
      d="M383 43.5l-17.046 8.961 3.256-18.98-13.79-13.442 19.057-2.77L383 0l8.523 17.27 19.058 2.769-13.79 13.442 3.255 18.98z"
      filter="url(#dropShadow)"
      transform="translate(-348 3)"
    />
  </svg>;

export default StarIcon;
