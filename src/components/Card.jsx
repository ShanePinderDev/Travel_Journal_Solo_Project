import React from "react";
import "./Card.css";
import pin from "../assets/pin.png";

export default function Card(props) {
  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  function CreateHrElement() {
    const [dimensions, setDimensions] = React.useState({
      width: window.innerWidth,
    });
    React.useEffect(() => {
      const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          width: window.innerWidth,
        });
      }, 1000);

      window.addEventListener("resize", debouncedHandleResize);

      return (_) => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    });

    if (dimensions.width <= 780) {
      return (
        <div>
          <hr />
        </div>
      );
    }
  }

  return (
    <div className="card">
      <img
        src={props.img}
        className="card--image"
        alt={`image of ${props.location}`}
      />
      <div className="card--stats">
        <div className="card--stats-location">
          <img src={pin} className="card--pin" />
          <span className="card--location">{props.location}</span>

          <a href={props.googleMapsUrl} className="card--googlemaps">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <span className="card--dates">
          {props.startDate} - {props.endDate}
        </span>

        <p className="card--description">{props.description}</p>
      </div>
      {CreateHrElement()}
    </div>
  );
}
