import React, { useState } from "react";
import { deploymentMode, DeploymentMode } from "../config";
import { useAppState } from "./App";
import { TextField, Button} from "./uiComponents";

const titles = [
  { label: "Mr", value: "mr" },
  {  label: "Mrs", value: "mrs" },
  {  label: "Ms", value: "ms" },
];
const martialStatuss = [
  { label: "Married", value: "married" },
  { label: "Unmarried", value: "unmarried" },
  {  label: "Divorced", value: "divorced" },
];

export const ContactInfoScreen:React.FC = () => {
 
  const handleDablLogin = () => {};
  const handleSubmit = () => {};

  const [formState, setFormState] = useState({
    title: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    maritalStatus: "",
    email: "",
    phoneNumber: "",
    city: "",
    province: "",
    streetAddress: "",
    pincode: "",
    typeOfId: "",
    idNumber: ""
    
  })

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    
    setFormState({
      ...state,
      [name]: value
    })
  }
  
 //@ts-ignore
const [state,setState] = useAppState();
  return (
    <>
      <h2>De-Loan via</h2>
        <form >
            {deploymentMode !== DeploymentMode.PROD_DABL ? (
              <>
                {/* FORM_BEGIN */}
                <TextField
                  select
                  options={titles}
                  value={formState.title}
                  name="title"
                  label="Title"
                  themeType="light"
                  onChange={onChangeHandler}
                />
                <TextField
                  name="firstName"
                  placeholder="First Name"
                  value={formState.firstName}
                  label="First Name"
                  themeType="light"
                  onChange={onChangeHandler}
                />
                <TextField
                  name="lastName"
                  themeType="light"
                  placeholder="Last Name"
                  value={formState.lastName}
                  label="Last Name"
                  onChange={onChangeHandler}
                />
                <TextField
                  name="birthDate"
                  themeType="light"
                  placeholder="Birthdate"
                  value={formState.birthDate}
                  label="Birthdate"
                  onChange={onChangeHandler}
                />
                <TextField
                  options={martialStatuss}
                  select
                  themeType="light"
                  name="maritalStatus"
                  placeholder="Marital Status"
                  value={formState.maritalStatus}
                  label="Marital Status"
                  onChange={onChangeHandler}

                />
                <TextField
                  type="email"
                  name="email"
                  themeType="light"
                  placeholder="Email"
                  value={formState.email}
                  label="Email"
                  onChange={onChangeHandler}
                />
                <TextField
                  name="phoneNumber"
                  themeType="light"
                  placeholder="Phone Number"
                  value={formState.phoneNumber}
                  label="Phone Number"
                  onChange={onChangeHandler}
                />
               <TextField
                  name="city"
                  themeType="light"
                  placeholder="City"
                  value={formState.city}
                  label="City"
                  onChange={onChangeHandler}
                />
               <TextField
                  name="province"
                  themeType="light"
                  value={formState.province}
                  label="State"
                  onChange={onChangeHandler}
                  placeholder="State"
                />
               <TextField
                  name="streetAddress"
                  themeType="light"
                  value={formState.streetAddress}
                  label="Street Address"
                  onChange={onChangeHandler}
                  placeholder="Street Address"
                />
                <TextField
                  name="streetAddress"
                  themeType="light"
                  value={formState.pincode}
                  label="Pin Code"
                  onChange={onChangeHandler}
                  placeholder="Pin Code"
                />
               <TextField
                  name="typeOfId"
                  themeType="light"
                  value={formState.typeOfId}
                  label="Type of ID"
                  onChange={onChangeHandler}
                  placeholder="Type of ID"
                />
                <TextField
                  name="idNumber"
                  themeType="light"
                  value={formState.idNumber}
                  label="ID Number"
                  onChange={onChangeHandler}
                  placeholder="ID Number"
                />
                <Button
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                {/* FORM_END */}
              </>
            ) : (
              <Button  onClick={handleDablLogin}>
                Log in with DABL
              </Button>
            )}
        </form>
    </>
  );
};
