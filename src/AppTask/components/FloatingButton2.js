import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingButton2({handleOpen2}) {

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                onClick={handleOpen2}
            >
                <AddIcon />
            </Fab>
        </Box>
    );
}
