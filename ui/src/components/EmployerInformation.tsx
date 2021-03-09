import { Button, TextField } from "./uiComponents";
import React from "react";
import { useAppState } from "./App";

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
  //@ts-ignore
  const [state, setState] = useAppState();
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
  const onEmployeeDetailsSubmit = () => {
    setState({
      ...state,
      employerInformation: {
        presentEmployer: presentEmployer,
        occupation: occupation,
        employmentPeriod: employmentPeriod,
        grossMonthlyIncome: grossMonthlyIncome,
      },
    });
  };
  return (
    <div>
      <h2>Employer information</h2>
      <TextField
        themeType="light"
        select
        label="Present Employer"
        value={presentEmployer}
        onChange={handlePresentEmployerChange}
        options={presentEmployerOptions}
      />
      <TextField
        themeType="light"
        select
        label="Occupation"
        value={occupation}
        onChange={handleOccupationChange}
        options={occupationOptions}
      />
      <TextField
        themeType="light"
        select
        label="Employment Period"
        value={employmentPeriod}
        onChange={handleEmploymentPeriod}
        options={employmentPeriodOptions}
      />
      <TextField
        themeType="light"
        id="outlined-basic"
        label="Gross monthly income"
        value={grossMonthlyIncome}
        onChange={handleGrossMonthlyChange}
      />
      <Button onClick={onEmployeeDetailsSubmit}>Next</Button>
    </div>
  );
};

export default EmployerInformation;
