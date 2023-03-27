import { useState } from 'react';

import BMIlist from './components/BMIlist';
import BMIscore from './components/BMIscore';
import Form from './components/Form';


function App() {
  const [show, setShow] = useState(false);

  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState('Not calculated');
  const [bmiRange, setBmiRange] = useState({
    underWeight: {high: ""},
    normal: {low: "", high: ""},
    overWeight: {low: "", high: ""},
    obesityOne: {low: "", high: ""},
    obesityTwo: {low: "", high: ""},
    obesityThree: {low: ""}
  });

  const [weightChange, setWeightChange] = useState({weight: "", type: ""});

  const onFormSub = (w,h) => {
    let b = calBmi(w,h);
    setBmi(b);
    //alert(w, h);
    setBmiType(weightType(b));

    const range = {
      underWeight: {high: calWeight(18.5, h)},
      normal: {low: calWeight(18.5, h),high: calWeight(24.9, h)},
      overWeight: {low: calWeight(25, h),high: calWeight(29.9, h)},
      obesityOne: {low: calWeight(30, h),high: calWeight(34.9, h)},
      obesityTwo: {low: calWeight(35, h),high: calWeight(39.9, h)},
      obesityThree: {low: calWeight(40, h)}
    };

    setBmiRange(range);

    setWeightChange(changeWeight(b, w, range));

    setShow(true);
  };

  const calBmi = (w,h) => (w / (h * h)).toFixed(2);

  const calWeight = (b,h) => (b * h * h).toFixed(2);

  const changeWeight = (b, w, range) => {
    let changeObj;
    if (b > 24.9){
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive"
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative"
      };
      return changeObj;
    } else {
      changeObj = {
        weight: 0,
        type: "normal"
      };
      return changeObj;
    }
  };

  const weightType = (bmi) => {
    if (bmi < 18.5){
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9){
      return "Normal";
    } else if (bmi > 24.9 && bmi <= 29.9){
      return "Over Weight";
    } else if (bmi > 29.9 && bmi <= 34.9){
      return "Obesity Class I";
    } else if (bmi > 34.9 && bmi <= 39.9){
      return "Obesity Class II";
    } else if (bmi > 39.9){
      return "Obesity Class III";
    }
  }
  
  return (
    <>
      <Form getData={onFormSub}/>
      
      {show && (
        <div className='row'>
          <div className='col col-sm-6'>
              <BMIscore bmiNo={bmi} bmiName={bmiType} weightChange={weightChange}/>
          </div>

          <div className='col col-sm-6'>
              <BMIlist range={bmiRange} bmi={bmi}/>
          </div>
        </div>
      )};
    </>
  );
}

export default App;
