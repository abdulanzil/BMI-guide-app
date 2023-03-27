function BMIscore({bmiNo, bmiName, weightChange}) {
    //const {bmiNo, bmiName} = props;
  return (
    <>
        <div className="col-sm-8 shadow rounded mx-auto px-4 py-3">
            <div className="text-center pb-2">Your BMI Score</div>
            <div className="col-sm-5 text-center mx-auto p-3 my-2 h1 bg-primary">{bmiNo}</div>
            <div className="text-center pt-2 pb-2 h5">{bmiName}</div>

            {weightChange.type === 'positive' && (
            <div className="text-center fs-5 text-danger">You need to lose <span className="fw-bold">{weightChange.weight}</span> Kg</div>
        )}
        {weightChange.type === 'negative' && (
            <div className="text-center fs-5 text-danger">You need to gain <span className="fw-bold">{weightChange.weight}</span> Kg</div>
        )}
        {weightChange.type === 'normal' && (
            <div className="text-center fs-5 text-success">Your weight is normal. Good for you</div>
        )}
        </div>

        
    </>
  )
}

export default BMIscore;

