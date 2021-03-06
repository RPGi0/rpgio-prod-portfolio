import React from 'react';
import ReactSpinner from 'react-spinjs-fix';

export default function LoadingSpinner (props) {
  const spinnerOptions = {
    lines: 11, // The number of lines to draw
    length: 0, // The length of each line
    width: 5, // The line thickness
    radius: 84, // The radius of the inner circle
    scale: 1.65, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: '#fff', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    speed: 1.1, // Rounds per second
    rotate: 0, // The rotation offset
    animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    className: 'spinner', // The CSS class to assign to the spinner
    top: '50%', // Top position relative to parent
    left: '50%', // Left position relative to parent
    shadow: '0 0 1px transparent', // Box-shadow for the lines
    position: 'absolute' // Element positioning
  };

  return (
    <div className={'loading-container' + (props.loading ? '' : ' done')}>
        <ReactSpinner config={spinnerOptions} />
      </div>
  )
}