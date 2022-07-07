const config = {
  reference: new Date().getTime(),
  email: "",
  publicKey: "pk_test_fd63cd4948fbf49a11f0164e16bd465eaa01b00a",
};

export const handlePaystackSuccessAction = (reference) => {
  console.log(reference);
};

export const handlePaystackCloseAction = () => {
  console.log("closed");
};

export const componentPropsUtil = (data, shippingCost, items, subtotal) => ({
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
        value: items.map((item) => `${item.name} x ${item.quantity}`),
      },
    ],
  },
  onSuccess: (reference) => handlePaystackSuccessAction(reference),
  onClose: handlePaystackCloseAction,
});
