import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FormTask(
    {
        handleClose,
        valuesDbStorage,
        isEditing,
        editData,
        setIsEditing
    }) {

    //const [formValues, setformValues] = useLocalStorage("db",[]);
    const [formValues, setformValues] = useState({
        id: isEditing ? editData.id : new Date().getTime(),
        task: isEditing ? editData.task : '',
        description: isEditing ? editData.description : ''
    });

    const handleChangeValues = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const { task, description } = formValues;

    const handleSendDb = (e) => {
        e.preventDefault();

        let allDbArray = [];

        if (valuesDbStorage) {
            allDbArray = valuesDbStorage;
        }

        if (isEditing) {
         const editTask = valuesDbStorage.map(val => {
              if(val.id === editData.id){
                  return {
                      ...val,
                      task: task,
                      description : description
                  }
              }
              return val;
          })

          localStorage.setItem('db', JSON.stringify(editTask));
          setIsEditing(false);
        } else {
            allDbArray.push(formValues);
            localStorage.setItem('db', JSON.stringify(allDbArray));
        }
        handleClose();
    }

    return (
        <Box
            component="form"
            onChange={handleChangeValues}
            onSubmit={handleSendDb}
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
                value={task}
            />
            <TextField
                id="filled-basic"
                label="Description"
                variant="filled"
                name="description"
                value={description}
            />
            <Button
                type="submit"
                variant="contained"
            >
                {isEditing ? 'Edit' : 'Submit'}
            </Button>
        </Box>
    );
}



