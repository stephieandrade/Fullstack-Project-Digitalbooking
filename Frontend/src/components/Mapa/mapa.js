import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./mapa.scoped.css";
import SimpleMap from "./SimpleMap";

export default function Mapa() {
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [responce, setResponce] = React.useState({});
  const [selectedVal, setSelectedVal] = React.useState("");

  React.useEffect(() => {
    function fetchData() {
      const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8&input=${value}`;

      fetch(url)
        .then((data) => data.json())
        .then((res) => {
          setResult(res.predictions);
        });
    }
    fetchData();
  }, [value]);

  React.useEffect(() => {
    if (selectedVal) {
      function fetchData() {
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8&place_id=${selectedVal}`;
        fetch(url)
          .then((data) => data.json())
          .then((res) => {
            setResponce(res.results[0]);
          });
      }
      fetchData();
    }
  }, [selectedVal]);
  const { lat = 6.14521, lng = -75.618842 } =
    responce && responce.geometry && responce.geometry.location
      ? responce.geometry.location
      : {};

  const center = { lat, lng };
  return (
    <div className="mapa">
      <React.Fragment>
        <Autocomplete
          id="Address"
          options={result}
          getOptionLabel={(option) => option.description}
          onChange={(event, newValue) => {
            event.preventDefault();
            if (newValue && newValue.place_id) {
              setSelectedVal(newValue.place_id);
            }
          }}
          style={{ width: "50%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(event) => setValue(event.target.value)}
              variant="outlined"
            />
          )}
        />

        <SimpleMap center={center} />
      </React.Fragment>
    </div>
  );
}
