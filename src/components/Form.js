import { useState } from "react";

function Form({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    if(isNaN(weight) || isNaN(height)){
        alert('Not a valid number');
    }
    else{
        getData(weight, height);
    }

    setHeight("");
    setWeight("");
  }

  return (
    <div className="col-sm-4 shadow rounded mx-auto my-4 px-4 pt-4 bg-info">
      <h3 className="text-center">BMI Calculator</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-2">
              <label className="form-label">Weight (kg): </label>
              <input
                type="text"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="col col-sm-6">
            <div className="my-2">
              <label className="form-label">Height (m): </label>
              <input
                type="text"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get BMI"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
