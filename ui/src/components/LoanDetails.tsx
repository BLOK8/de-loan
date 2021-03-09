import { Button, TextField } from "./uiComponents";
import React from "react";
import { useAppState } from "./App";

const LoanDetails = () => {
  const purposes = [
    {
      value: "Personal",
      label: "Personal Loan",
    },
    {
      value: "Education",
      label: "Education Loan",
    },
  ];
  //@ts-ignore
  const [state, setState] = useAppState();
  const [purpose, setPurpose] = React.useState("Personal");
  const [loanAmount, setLoanAmount] = React.useState("");
  const [loanTerm, setLoanTerm] = React.useState("");
  const handlePurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPurpose(event.target.value);
  };
  const handleLoanAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoanAmount(event.target.value);
  };
  const handleLoanTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(event.target.value);
  };
  const onLoanDetailsSubmit = () => {
    setState({
      ...state,
      loanDetails: {
        purpose: purpose,
        loanAmount: loanAmount,
        loanTerm: loanTerm,
      },
    });
  };

  return (
    <div>
      <TextField
        themeType="light"
        select
        label="Purpose of loan"
        value={purpose}
        onChange={handlePurposeChange}
        SelectProps={{
          native: true,
        }}
        helperText="Purpose of loan"
        variant="outlined"
      >
        {purposes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        themeType="light"
        id="outlined-basic"
        label="Loan Amount"
        variant="outlined"
        value={loanAmount}
        onChange={handleLoanAmountChange}
      />
      <TextField
        themeType="light"
        id="outlined-basic"
        label="Terms(in months)"
        variant="outlined"
        value={loanTerm}
        onChange={handleLoanTermChange}
      />
      <Button onClick={onLoanDetailsSubmit}>Next</Button>
    </div>
  );
};

export default LoanDetails;
