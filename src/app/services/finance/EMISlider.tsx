import React from "react";
import Slider from "react-slider";

interface EMISliderProps {
  MIN: number;
  MAX: number;
  value: number;
  setValue: (value: number) => void;
  steps: number;
  points: number[]; // Updated to reflect an array of numbers
}

const EMISlider : React.FC<EMISliderProps> = ({ MIN, MAX, value, setValue, steps }) => {
  const styles = `
    .slider {
      width: 100%;
      height: 4px;
     
      margin-top: 20px;
    }

    .slider .thumb {
      width: 2px;
      height: 24px;
      cursor: grab;
      border-radius: 2px;
      border: 2px solid red;
      border-color: #303a9b;
      top: -10px;
      background-color: #303a9b;
    }
    .slider .mark {
      width: 2px;
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid red;
      border-color: #00BAB8;
      // background-color: white;
      top:1px;
    }
    
    .slider .track-0 {
      width: 100%;
      height: 4px;
      
      background: #000
    }
    .slider .track-1 {
      width: 100%;
      height: 4px;
      background-color: #303a9b;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="pb-4 overflow-hidden">
        <Slider
          className="slider "
          // marks={points}
          min={MIN}
          max={MAX}
          step={steps}
          onChange={setValue}
          value={value}
        />
      </div>
    </>
  );
};

export default EMISlider;
