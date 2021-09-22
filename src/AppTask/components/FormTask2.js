import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FormTask2() {

    const [checked, setChecked] = useState(false);

    const [formValues, setformValues] = useLocalStorage("db", []);

    const handleChangeValues = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    return (
        <Box
            component="form"
            onChange={handleChangeValues}
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
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />{" "}
                Not a robot?
            </label>
            <Button
                type="submit"
                variant="contained"
            >
                Save
            </Button>
        </Box>
    );
}



