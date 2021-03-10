import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BtnGroup, Button } from '../uiComponents';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    paper: {
      backgroundColor: "#fff",
      boxShadow: theme.shadows[5],
      padding: "30px",
      width: 500
    },
  }),
);

interface IApproverModal {
    open: boolean;
    handleClose: () => void;
    approvedAction: () => void;
}

export const ApproverModal:React.FC<IApproverModal> = ({open, handleClose, approvedAction}) => {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h4 id="transition-modal-title">Do you want to proceed?</h4>
                    <BtnGroup>
                        <Button size="small" themeType="light" variant="outlined" onClick={handleClose}>Close</Button>
                        <Button size="small" onClick={approvedAction}>Approve</Button>
                    </BtnGroup>
                </div>
            </Fade>
        </Modal>
    )
}