import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useDraggable from "./useDraggable";
import "./index.css"

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div className="card" ref={cardRef}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <DraggableCard>Card 1</DraggableCard>
      <DraggableCard>Card 2</DraggableCard>
      <DraggableCard>Card 3</DraggableCard>
      <DraggableCard>Card 4</DraggableCard>
      <DraggableCard>Card 5</DraggableCard>
      <DraggableCard>Card 6</DraggableCard>
    </div>
  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


