import * as React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import Autocomplete from "../../commons/Autocomplete";
import { setAirports } from "../../state/airports";
import { setFlights } from "../../state/flights";

import s from "./style.module.scss";

export default function Filter() {
  const regions = ["All", "Europe", "America", "Asia"];
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [selectedRegion, setRegion] = React.useState("All");
  const options = useSelector((state) => state.airports);
  const dispatch = useDispatch();

  const handleOriginChange = (value) => {
    setOrigin(value); // settea el value del autocomplete (controlled inputs)
    dispatch(setFlights({ origin: value, destination }));
  };

  const handleDestinationChange = (value) => {
    setDestination(value); // settea el value del autocomplete (controlled inputs)
    dispatch(setFlights({ origin, destination: value }));
  };

  const handleRegionClick = (value) => {
    dispatch(setAirports(value));
    setRegion(value);
  };

  return (
    <section className={s.filters}>
      <div className={s.flex}>
        <h3>Where are you going?</h3>
        <div className={s.flex}>
          {regions.map((region) => (
            <Button
              key={region}
              onClick={() => handleRegionClick(region)}
              type={selectedRegion === region ? "primary" : "default"}
            >
              {region}
            </Button>
          ))}
        </div>
      </div>
      <div className={s.flex}>
        <Autocomplete
          placeholder="from"
          options={options}
          onSelect={handleOriginChange}
          header="Pick the city of departure"
        />
        <Autocomplete
          placeholder="to"
          options={options}
          onSelect={handleDestinationChange}
          header="Pick the city of arrival"
        />
      </div>
    </section>
  );
}
