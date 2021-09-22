import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FormTaskRedux = () => {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="filled-basic"
                    label="Name Task"
                    variant="filled"
                    name="task"
                />
                <TextField
                    id="filled-basic"
                    label="Description"
                    variant="filled"
                    name="description"
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </Box>
        </div>
    )
}
