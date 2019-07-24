import React, { useState } from "react";
import "./hookForm.css";
import { Button, Input, Form, Label } from "reactstrap";
import { connect } from "react-redux";

function HookForm(props) {
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [img, setImg] = useState("");
  
  const fileSelectedHandler = event => {
    console.log("fileSelectedHandler", event.target.files[0])
    setImg(event.target.files[0]);
  }

  const sendDataCar = async e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("imgCar", img);
    formData.append("brand", props.brand);
    formData.append("model", props.model);
    formData.append("mileage", mileage);
    formData.append("vin", vin);

    let response = await fetch("/car/register/", {
      mode: "no-cors",
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Form method="POST" onSubmit={sendDataCar}>
      <Label for="mileage">Odometer</Label>
      <Input
        value={mileage}
        onChange={e => setMileage(e.target.value)}
        placeholder="Odometer data"
        type="number"
        name="mileage"
        id="mileage"
        required
      />
      <Label for="vin">VIN number</Label>
      <Input
        value={vin}
        onChange={e => setVin(e.target.value)}
        placeholder="VIN 17 characters"
        type="text"
        name="vin"
        id="vin"
        required
      />
      <Label for="mileage-input">Upload car image</Label>
      <Input
        onChange={e => fileSelectedHandler(e)}
        placeholder="Email address"
        type="file"
        name="img"
        id="img"
      />
      <Button>Add car</Button>{" "}
    </Form>
  );
}

const mapStateToProps = state => {
  return { ...state.reducer };
};

export default connect(mapStateToProps)(HookForm);