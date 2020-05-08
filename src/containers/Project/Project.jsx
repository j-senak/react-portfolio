import React from 'react';

const Project = (props) => {
    return (
        <div className="col-sm-6 col-md-12 col-lg-6">
        <a href={props.url}>
          <p>{props.title}</p>
          <img
            className="img-fluid port-image"
            src={props.img}
            alt=""
          ></img>
        </a>           
        </div>
    );
};

export default Project;