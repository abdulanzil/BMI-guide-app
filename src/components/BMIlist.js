function BMIlist({ range, bmi }) {
  return (
    <>
      <div className="col-sm-10 text-center shadow rounded mx-auto">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col-4 fw-bold">Type</div>
              <div className="col-3 fw-bold">BMI</div>
              <div className="col-5 fw-bold">WEIGHT</div>
            </div>
          </li>

          <li
            className={
              bmi > 0 && bmi < 18.5
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >
            <div className="row">
              <div className="col-4">Underweight</div>
              <div className="col-3">&lt; 18.5</div>
              <div className="col-5">&lt; {range.underWeight.high} Kg</div>
            </div>
          </li>
          <li
            className={
              bmi >= 18.5 && bmi <= 24.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >
            <div className="row">
              <div className="col-4">Normal</div>
              <div className="col-3">18.5 - 24.9</div>
              <div className="col-5">
                {range.normal.low} - {range.normal.high} Kg
              </div>
            </div>
          </li>
          <li
            className={
              bmi > 24.9 && bmi <= 29.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >
            <div className="row">
              <div className="col-4">Over Weight</div>
              <div className="col-3">25 - 29.9</div>
              <div className="col-5">
                {range.overWeight.low} - {range.overWeight.high} Kg
              </div>
            </div>
          </li>
          <li
            className={
              bmi > 29.9 && bmi <= 34.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >
            <div className="row">
              <div className="col-4">Obesity Class I</div>
              <div className="col-3">30 - 34.9</div>
              <div className="col-5">
                {range.obesityOne.low} - {range.obesityOne.high} Kg
              </div>
            </div>
          </li>
          <li
            className={
              bmi > 34.9 && bmi <= 39.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >
            <div className="row">
              <div className="col-4">Obesity Class II</div>
              <div className="col-3">35 - 39.9</div>
              <div className="col-5">
                {range.obesityTwo.low} - {range.obesityTwo.high} Kg
              </div>
            </div>
          </li>
          <li
            className={
              bmi > 39.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >
            <div className="row">
              <div className="col-4">Obesity Class III</div>
              <div className="col-3">&gt;= 40</div>
              <div className="col-5">&gt; {range.obesityThree.low} Kg</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BMIlist;
