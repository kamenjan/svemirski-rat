import * as React from "react";
const SvgShip = (props: { x: number; y: number }) => (
  <path
    transform={`translate(${props.x}, ${props.y})`}
    fill="white"
    d="M4 23a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 2 0v-1.772a17.471 17.471 0 0 0 2 .232V22a1 1 0 0 0 2 0v-1.54a17.471 17.471 0 0 0 2-.232V22a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-9a1 1 0 0 0-.4-.8L17 9.5V8a7.034 7.034 0 0 0-2.8-5.6l-1.6-1.2a1 1 0 0 0-1.2 0L9.8 2.4A7.034 7.034 0 0 0 7 8v1.5l-3.6 2.7a1 1 0 0 0-.4.8v9a1 1 0 0 0 1 1Zm13-11 2 1.5V18h-2ZM9 8a5.025 5.025 0 0 1 2-4l1-.75L13 4a5.025 5.025 0 0 1 2 4v10.2a15.446 15.446 0 0 1-2 .243V16a1 1 0 0 0-2 0v2.442a15.446 15.446 0 0 1-2-.242Zm-4 5.5L7 12v6H5Z"
  />
);
export default SvgShip;
