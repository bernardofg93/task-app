import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormTask from './FormTask';

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

export const ModalTask = (
  { 
    handleClose, 
    open, 
    valuesDbStorage, 
    isEditing,
    editData,
    setIsEditing
  }) =>  {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormTask
            isEditing={isEditing}
            valuesDbStorage={valuesDbStorage}
            handleClose={handleClose}
            editData={editData}
            setIsEditing={setIsEditing}
          />
        </Box>
      </Modal>
    </div>
  );
}
