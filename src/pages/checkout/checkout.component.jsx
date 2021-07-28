import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PaystackConsumer } from "react-paystack";

import useForm from "../../custom-hooks/useForm";
import validation from "../../custom-hooks/validateInfo";

import CartItemOverview from "../../component/cart-item-overview/cart-item-overview.component";
import CheckoutFormInput from "../../component/checkout-form-input/checkout-form-input.component";
import CustomButton from "../../component/custom-buttom/custom-button.component";
import RadioButton from "../../component/radio-button/radio-button.component";
import Total from "../../component/total/total.component";

import { stateData } from "../../data/stateData";
import {
  selectCartItems,
  selectCartSubtotal,
} from "../../redux/cart/cart.selectors";

import {
  Wrapper,
  FormGroup,
  FormSubGroup,
  FormInputGroup,
  Title,
  CartOverviewWrapper,
  CartItemsWrapper,
  TotalOverviewWrapper,
} from "./checkout.styles";
import CustomSelectInput from "../../component/custom-select-input/custom-select-input.component";

const config = {
  reference: new Date().getTime(),
  email: "",
  publicKey: "pk_test_fd63cd4948fbf49a11f0164e16bd465eaa01b00a",
};

const handlePaystackSuccessAction = (reference) => {
  console.log(reference);
};

const handlePaystackCloseAction = () => {
  console.log("closed");
};

const CheckoutPage = ({ cartItems, subtotal }) => {
  const { handleChange, handleValidation, data, errors, valid } =
    useForm(validation);

  console.log(valid);
  console.log(data);

  const shippingCost = data.shipping === "withinKano" ? 500 : 2000;

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    amount: (subtotal + shippingCost) * 100,
    email: data.email,
    metadata: {
      custom_fields: [
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: data.phoneNo,
        },
        {
          display_name: "First Name",
          variable_name: "first_name",
          value: data.firstName,
        },
        {
          display_name: "Last Name",
          variable_name: "last_name",
          value: data.lastName,
        },
        {
          display_name: "Address",
          variable_name: "address",
          value: data.address,
        },
        {
          display_name: "City",
          variable_name: "city",
          value: data.city,
        },
        {
          display_name: "Zip/ Postal Code",
          variable_name: "zip_code",
          value: data.zipCode,
        },
        {
          display_name: "Country",
          variable_name: "country",
          value: data.country,
        },
        {
          display_name: "State",
          variable_name: "state",
          value: data.state,
        },
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: cartItems.map(
            (cartItem) => `${cartItem.name} x ${cartItem.quantity}`
          ),
        },
      ],
    },
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <Wrapper>
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
            data={["Nigeria", "Ghana", "s.Korea"]}
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
          {/* <CheckoutFormInput
            name="country"
            type="text"
            value={data.country}
            handleChange={handleChange}
            label="Country"
            required
            error={errors.country}
          /> */}
          {/* <CheckoutFormInput
            name="state"
            type="text"
            value={data.addressState}
            handleChange={handleChange}
            label="State"
            error={errors.state}
            required
          /> */}
        </FormSubGroup>
        <FormSubGroup
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <Title>Shipping method</Title>
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
      <CartOverviewWrapper>
        <CartItemsWrapper>
          {cartItems.map((cartItem) => (
            <CartItemOverview key={cartItem.id} item={cartItem} />
          ))}
        </CartItemsWrapper>
        <TotalOverviewWrapper>
          <Total title="SubTotal" total={subtotal} />
          <Total title="Shipping Fee" total={shippingCost} />
          <Total title="Total" total={subtotal + shippingCost} />
        </TotalOverviewWrapper>
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <CustomButton
              style={{ width: "100%", marginTop: "4vh" }}
              onClick={() => {
                console.log();
                handleValidation();
                if (valid) {
                  initializePayment(
                    handlePaystackSuccessAction,
                    handlePaystackCloseAction
                  );
                } else {
                  return null;
                }
              }}
            >
              Pay Now
            </CustomButton>
          )}
        </PaystackConsumer>
      </CartOverviewWrapper>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subtotal: selectCartSubtotal,
});

export default connect(mapStateToProps)(CheckoutPage);
