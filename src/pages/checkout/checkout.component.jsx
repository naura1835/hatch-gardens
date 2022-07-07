import React, { useContext, useEffect, useRef } from "react";
import { PaystackConsumer } from "react-paystack";

import { CartContext } from "../../contexts/cart/cart.context";

import useForm from "../../custom-hooks/useFrom";
import validation from "../../custom-hooks/validateInfo";
import {
  componentPropsUtil,
  handlePaystackSuccessAction,
  handlePaystackCloseAction,
} from "../../utils/paystack/paystack.utils";

import CheckoutForm from "../../component/checkout-form/checkout-form.component";
import CheckoutCartOverview from "../../component/checkout-cart-overview/checkout-cart-overview.component";
import CustomButton from "../../component/custom-buttom/custom-button.component";
import Total from "../../component/total/total.component";

import {
  Wrapper,
  CartOverviewWrapper,
  CartItemsWrapper,
  TotalOverviewWrapper,
} from "./checkout.styles";

const CheckoutPage = () => {
  const { cartItems, cartSubtotal } = useContext(CartContext);
  const { handleChange, handleValidation, data, errors, valid } =
    useForm(validation);

  const formData = { data, errors, handleChange };

  const shippingCost = data.shipping === "withinKano" ? 500 : 2000;

  const componentProps = componentPropsUtil(
    data,
    shippingCost,
    cartItems,
    cartSubtotal
  );
  return (
    <Wrapper>
      <CheckoutForm formData={formData} />
      <CartOverviewWrapper>
        <CartItemsWrapper>
          {cartItems.map((cartItem) => (
            <CheckoutCartOverview key={cartItem.id} item={cartItem} />
          ))}
        </CartItemsWrapper>
        <TotalOverviewWrapper>
          <Total title="SubTotal" total={cartSubtotal} />
          <Total title="Shipping Fee" total={shippingCost} />
          <Total title="Total" total={cartSubtotal + shippingCost} />
        </TotalOverviewWrapper>
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <CustomButton
              style={{ width: "100%", marginTop: "4vh" }}
              onClick={() => {
                console.log(data);
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

export default CheckoutPage;
