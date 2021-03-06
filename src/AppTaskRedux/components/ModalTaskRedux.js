import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormTaskRedux } from './FormTaskRedux';
import { useSelector } from 'react-redux';

export const ModalTaskRedux = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const { modalOpen } = useSelector(state => state.ui )
    
    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                   <FormTaskRedux />
                </Box>
            </Modal>
        </div>
    )
}
