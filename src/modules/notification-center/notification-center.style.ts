import styled from "styled-components";

export const NotificationCenterContainer = styled.div`
  position: relative;
  height: 450px;
  width: 100%;
  overflow: auto;
  will-change: transform;
  direction: ltr;
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const NotificationCenterPopin = styled.div`
  background: white;
  position: absolute;
  top: 60px;
  border-radius: 5px;
`;

export const Chip = styled.span`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  font-family: "Source sans Pro";
  font-weight: bold;
  font-size: 0.75rem;
  min-width: 20px;
  line-height: 1;
  padding: 0px 6px;
  height: 20px;
  border-radius: 10px;
  z-index: 1;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgb(235, 0, 20);
  color: rgb(255, 255, 255);
  top: 20px;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
`;

export const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  &.path {
    stroke: #5652BF;
    stroke-linecap: round;
    color: blue;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
