import React from "react";
import history from "../../history";
import { Table, TableCell, TableHead, TableRow } from "../uiComponents";
import { useSnackbar } from "notistack";
import { ApproverModal } from "./Modal";

type Props = {};
export const ApproverDashboard: React.FC<Props> = (props) => {
  const loanApplicantions = [
    {
      firstName: "one",
      title: "Mr",
      lastName: "S",
      birthDate: "",
      maritalStatus: "",
      email: "",
      phoneNumber: "",
      city: "",
      state: "",
      streetAddress: "",
      pincode: "",
      typeOfId: "",
      idNumber: "",
      loanAmount:"1212"
    },
    {
      firstName: "Two",
      title: "Mr",
      lastName: "S",
      birthDate: "",
      maritalStatus: "",
      email: "",
      phoneNumber: "",
      city: "",
      state: "",
      streetAddress: "",
      pincode: "",
      typeOfId: "",
      idNumber: "",
      loanAmount:"1111"
    },
  ];
  const [modalOpen, setModalOpen] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();



  const handleOnRowClick=(eachLoan:any)=>{
    // set application state and route to form

    setModalOpen(true);
  }

  const modalCloseAction = () => {
    setModalOpen(false);
  }

  const modalApproveAction = () => {

    // conditionn if success
    enqueueSnackbar("Loan approved", { variant: "success" });

    // conditionn if fail
    // enqueueSnackbar("something went wrong", { variant: "error" });
    modalCloseAction()

  }
  return (
   <> 
    <h2>Dashboard</h2>
   <Table>
        <TableHead>
        <TableCell>Title</TableCell>
        <TableCell>FirstName</TableCell>
        <TableCell>LastName</TableCell>
        <TableCell>Loan Amount</TableCell>
        </TableHead>
       
        {loanApplicantions.map(eachLoan=>{
          return <TableRow onClick={()=>handleOnRowClick(eachLoan)}>
           <TableCell>{eachLoan.title}</TableCell>
          <TableCell>{eachLoan.firstName}</TableCell>
          <TableCell>{eachLoan.lastName}</TableCell>
          <TableCell>{eachLoan.loanAmount}</TableCell>
          </TableRow>
      })}
    </Table>
    <ApproverModal open={modalOpen} approvedAction={modalApproveAction} handleClose={modalCloseAction} />
    </>
  )
}

