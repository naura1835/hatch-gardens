import React from "react";

import { stateData } from "../../data/stateData";

import CheckoutFormInput from "../checkout-form-input/checkout-form-input.component";
import RadioButton from "../radio-button/radio-button.component";
import CustomSelectInput from "../custom-select-input/custom-select-input.component";

import {
  FormGroup,
  FormSubGroup,
  Title,
  FormInputGroup,
} from "./checkout-from.styles";

const CheckoutForm = ({ formData }) => {
  const { data, errors, handleChange } = formData;

  return (
    <FormGroup>
      <FormSubGroup>
        <Title>My information</Title>
        <CheckoutFormInput
          name="email"
          type="email"
          value={data.email}
          handleChange={handleChange}
          label="Email"
          error={errors.email}
          required
        />
        <CheckoutFormInput
          name="phoneNo"
          type="text"
          value={data.phoneNo}
          handleChange={handleChange}
          label="Phone Number"
          error={errors.phoneNo}
          required
        />
      </FormSubGroup>
      <FormSubGroup>
        <Title>Delivery information</Title>
        <CheckoutFormInput
          name="firstName"
          type="text"
          value={data.firstName}
          handleChange={handleChange}
          label="First Name"
          error={errors.firstName}
          required
        />
        <CheckoutFormInput
          name="lastName"
          type="text"
          value={data.lastName}
          handleChange={handleChange}
          label="Last Name"
          error={errors.lastName}
          required
        />
        <CheckoutFormInput
          name="address"
          type="text"
          value={data.address}
          handleChange={handleChange}
          label="Address"
          error={errors.address}
          required
        />
        <FormInputGroup>
          <CheckoutFormInput
            name="city"
            type="text"
            value={data.city}
            handleChange={handleChange}
            label="City"
            required
            error={errors.city}
          />
          <CheckoutFormInput
            name="zipCode"
            type="text"
            value={data.zipCode}
            handleChange={handleChange}
            label="Zip/Postal Code"
            required
            error={errors.zipCode}
          />
        </FormInputGroup>
        <CustomSelectInput
          name="country"
          value={(data.country = "Nigeria")}
          handleChange={handleChange}
          label="Country"
          data={["Nigeria", "Ghana", "South Korea"]}
          required
          disabled
          error={errors.country}
        />
        <CustomSelectInput
          name="state"
          value={data.state}
          handleChange={handleChange}
          label="State"
          data={stateData}
          required
          error={errors.state}
        />
      </FormSubGroup>
      <FormSubGroup
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <Title>Shipping method</Title>
        {/* <input type="radio" name="shipping" /> */}
        <RadioButton
          type="radio"
          name="shipping"
          value="withinKano"
          label="Within Kano - NGN 500"
          sublabel="Package can be delivered same day or take up to 2 days within Kano Metropolis"
          handleShipping={data.shipping === "withinKano"}
          handleChange={handleChange}
        />
        <RadioButton
          type="radio"
          name="shipping"
          value="outsideKano"
          label="Outside Kano - NGN 2000"
          sublabel="Delivery can take 7-10  business days for packages outside of Kano Metropolis"
          handleShipping={data.shipping === "outsideKano"}
          handleChange={handleChange}
        />
      </FormSubGroup>
    </FormGroup>
  );
};

export default CheckoutForm;
