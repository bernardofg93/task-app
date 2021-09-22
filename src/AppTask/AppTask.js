import React, { useState, useEffect } from 'react';
import { ModalTask } from './components/ModalTask';
import NavBar from '../components/NavBar';
import FloatButton from './components/FloatButton';
import FloatingButton2 from './components/FloatingButton2';
import ModalTask2 from './components/ModalTask2';
import { CardTask } from './components/CardTask';

export const AppTask = () => {

  const [valuesDbStorage, setValuesDbStorage] = useState([]);
  const [reloadDB, setReloadDb] = useState(false);
  const [isEditing, setIsEditing] = useState();
  const [editData, setEditData] = useState();
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);

  useEffect(() => {
    const AllStorage = localStorage.getItem('db');
    const valuesDb = JSON.parse(AllStorage);
    setValuesDbStorage(valuesDb);
    setReloadDb(false);
  }, [reloadDB, open]);


  const handleOpen = () => {
    setopen(true)
  }

  const handleOpen2 = () => {
    setopen2(true)
  }

  const handleClose = () => {
    setopen(false);
    setIsEditing(false);
  }

  const handleClose2 = () => {
    setopen2(false);
  }

  return (
    <div>
      <NavBar />
      <ModalTask
        handleClose={handleClose}
        valuesDbStorage={valuesDbStorage}
        open={open}
        isEditing={isEditing}
        editData={editData}
        setIsEditing={setIsEditing}
      />
      <FloatButton
        handleOpen={handleOpen}
        isEditing={setIsEditing}
      />
      <FloatingButton2
        handleOpen2={handleOpen2}
      />
      <ModalTask2
        handleClose2={handleClose2}
        open2={open2}
      />
      <CardTask
        valuesDbStorage={valuesDbStorage}
        setValuesDbStorage={setValuesDbStorage}
        reloadDB={setReloadDb}
        openModal={setopen}
        isEditing={setIsEditing}
        editData={setEditData}
      />
    </div>
  )
}

