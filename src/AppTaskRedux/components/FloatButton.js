import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

export const FloatButton = () => {

    const dispatch = useDispatch();
    
    const handleOpenModal = () => {
        dispatch(uiOpenModal())
    }

    return (
        <div className="float-btn">
            <Fab 
                onClick={handleOpenModal}
                size="small" 
                color="primary" 
                aria-label="add"
            >
                <AddIcon />
            </Fab>
        </div>
    )
}
