import { Button, TextField } from "./uiComponents";
import React from "react";
import { useAppState } from "./App";
import { useSnackbar } from "notistack";

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
  const { enqueueSnackbar } = useSnackbar();
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
    enqueueSnackbar("Loan submitted successfully", { variant: "success" });
  };

  return (
    <div>
      <h2>Loan detail</h2>
      <TextField
        themeType="light"
        select
        label="Purpose of loan"
        value={purpose}
        onChange={handlePurposeChange}
        options={purposes}
      />
      <TextField
        themeType="light"
        id="outlined-basic"
        label="Loan Amount"
        value={loanAmount}
        onChange={handleLoanAmountChange}
      />
      <TextField
        themeType="light"
        id="outlined-basic"
        label="Terms(in months)"
        value={loanTerm}
        onChange={handleLoanTermChange}
      />
      <Button onClick={onLoanDetailsSubmit}>Submit</Button>
    </div>
  );
};

export default LoanDetails;
