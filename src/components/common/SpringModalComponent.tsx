import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import FadeComponent from "./FadeComponent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(1),
        },
    }),
);

interface ISpringModalProps {
    openModal: boolean
    width?: string | number
    children: any
    handleModal: (openModal: boolean) => void
}

export default function SpringModal(props: ISpringModalProps) {
    const classes = useStyles();
    const {children, openModal, handleModal, width} = props;

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={() => handleModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <FadeComponent in={openModal}>
                    <div className={classes.paper} style={{width: width}}>
                        {children}
                    </div>
                </FadeComponent>
            </Modal>
        </div>
    );
}
