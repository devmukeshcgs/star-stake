import React from 'react';
function CardSection() {


  return (
    <div className="card-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-3">
            {/* card */}
            <div className="card-img text-left wow slideInLeft">
              <img className="img-fluid" src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/card-1.png" alt="" />
            </div>
          </div>
          <div className="col-3">
            {/* card */}
            <div className="card-img text-center wow slideInUp">
              <img className="img-fluid" src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/card-2.png" alt="" />
            </div>
          </div>
          <div className="col-3">
            {/* card */}
            <div className="card-img text-center wow slideInUp">
              <img className="img-fluid" src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/card-3.png" alt="" />
            </div>
          </div>
          <div className="col-3">
            {/* card */}
            <div className="card-img text-right wow slideInRight">
              <img className="img-fluid" src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/card-4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default CardSection;
