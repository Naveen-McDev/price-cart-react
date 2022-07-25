import React from "react";

function Cart(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">

            {/* subscription title */}
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.plans.title.name}
            </h5>

            {/* price for subcription */}
            <h6 className="card-price text-center">
              {props.plans.price.price}
              <span className="period">{props.plans.price.duration}</span>
            </h6>
            <hr />

            {/* list of offers */}
            <ul className="fa-ul">


              {/* no of users */}
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.plans.noOfUsers.title}
              </li>


              {/* provided Storage capacity */}
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.plans.storage.capacity} Storage
              </li>


              {/* unlimited public projects */}
              {props.plans.unlimited_Public_Projects.availability === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>{" "}
                  {props.plans.unlimited_Public_Projects.title}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>{" "}
                  {props.plans.unlimited_Public_Projects.title}
                </li>
              )}


              {/* community access */}
              {props.plans.community_Access.availability === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.plans.community_Access.title}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.plans.community_Access.title}
                </li>
              )}


              {/* unlimited private projects */}
              {props.plans.privateProjects.availability === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.plans.privateProjects.title}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.plans.privateProjects.title}
                </li>
              )}


              {/* dedicated phone support */}
              {props.plans.support.availability === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.plans.support.title}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.plans.support.title}
                </li>
              )}


              {/* free subdomain */}
              {props.plans.subDomain.availability === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.plans.subDomain.title}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.plans.subDomain.title}
                </li>
              )}


              {/* monthly status report */}
              {props.plans.statusReport.availability === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.plans.statusReport.title}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.plans.statusReport.title}
                </li>
              )}

             
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
