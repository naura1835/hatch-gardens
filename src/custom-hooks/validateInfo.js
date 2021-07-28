export default function validateInfo(values) {
  let newErrors = {};
  let valid = true;

  if (!values.email) {
    newErrors.email = "Email is required";
    valid = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    newErrors.email = "Email is incorrect";
    valid = false;
  }
  if (!values.phoneNo) {
    newErrors.phoneNo = "Phone Number is required";
    valid = false;
  }
  if (!values.firstName) {
    newErrors.firstName = "This field is required";
    valid = false;
  }
  if (!values.lastName) {
    newErrors.lastName = "This field is required";
    valid = false;
  }
  if (!values.address) {
    newErrors.address = "This field is required";
    valid = false;
  }
  if (!values.city) {
    newErrors.city = "This field is required";
    valid = false;
  }
  if (!values.zipCode) {
    newErrors.zipCode = "This field is required";
    valid = false;
  }
  if (!values.country) {
    newErrors.country = "This field is required";
    valid = false;
  }
  if (!values.state) {
    newErrors.state = "This field is required";
    valid = false;
  }

  return { newErrors, valid };
}
