import { TextField } from "./uiComponents";
import React from "react";

const EmployerInformation = () => {
  const presentEmployerOptions = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
  ];
  const occupationOptions = [
    {
      value: "Private",
      label: "Private Employee",
    },
    {
      value: "Goverment",
      label: "Government Employee",
    },
    {
      value: "Self",
      label: "Self Employed",
    },
  ];
  const employmentPeriodOptions = [
    {
      value: "0-1",
      label: "0-1 year",
    },
    {
      value: "1-3",
      label: "1-3 years",
    },
    {
      value: "3-5",
      label: "3-5 years",
    },
    {
      value: "5+",
      label: "More than 5 years",
    },
  ];
  const [presentEmployer, setPresentEmployer] = React.useState("Yes");
  const [occupation, setOccupation] = React.useState("Private");
  const [employmentPeriod, setEmploymentPeriod] = React.useState("0-1");
  const [grossMonthlyIncome, setGrossMonthlyIncome] = React.useState("");
  const handleGrossMonthlyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrossMonthlyIncome(event.target.value);
  };
  const handlePresentEmployerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPresentEmployer(event.target.value);
  };
  const handleOccupationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOccupation(event.target.value);
  };
  const handleEmploymentPeriod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmploymentPeriod(event.target.value);
  };
  return (
    <div>
      <TextField
        themeType="light"
        select
        label="Present Employer"
        value={presentEmployer}
        onChange={handlePresentEmployerChange}
        SelectProps={{
          native: true,
        }}
        helperText="Present Employer"
        variant="outlined"
      >
        {presentEmployerOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        themeType="light"
        select
        label="Occupation"
        value={occupation}
        onChange={handleOccupationChange}
        SelectProps={{
          native: true,
        }}
        helperText="Occupation"
        variant="outlined"
      >
        {occupationOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        themeType="light"
        select
        label="Employment Period"
        value={employmentPeriod}
        onChange={handleEmploymentPeriod}
        SelectProps={{
          native: true,
        }}
        helperText="Employment Period"
        variant="outlined"
      >
        {employmentPeriodOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        themeType="light"
        id="outlined-basic"
        label="Gross monthly income"
        variant="outlined"
        value={grossMonthlyIncome}
        onChange={handleGrossMonthlyChange}
      />
    </div>
  );
};

export default EmployerInformation;
