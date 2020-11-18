import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogForm = ({ id, name }) => {
  const [open, setOpen] = useState(false);

  const [exam1, setExam1] = useState('');
  const [exam2, setExam2] = useState('');
  const [exam3, setExam3] = useState('');

  const path = `https://asia-east2-playground-taste.cloudfunctions.net/api/volunteers/${id}`;

  async function updateData(url, data) {
    try {
      const res = await axios.patch(url, data);
      console.log(res.data);
      setExam1('');
      setExam2('');
      setExam3('');
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function getData(url) {
    try {
      const res = await axios.get(url);
      res.data.exam1 && setExam1(res.data.exam1);
      res.data.exam2 && setExam2(res.data.exam2);
      res.data.exam3 && setExam3(res.data.exam3);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(path);
  }, [path]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      exam1: exam1 ? exam1 : '',
      exam3: exam3 ? exam3 : '',
      exam2: exam2 ? exam2 : ''
    };

    updateData(path, data);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Edit
      </Button>
      <Dialog open={open}>
        <DialogTitle>Edit {name}'s data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Exam1 Result"
              value={exam1}
              onChange={e => setExam1(e.target.value)}
              fullWidth
            />
            <TextField
              label="Exam2 Result"
              value={exam2}
              onChange={e => setExam2(e.target.value)}
              fullWidth
            />
            <TextField
              label="Exam3 Result"
              value={exam3}
              onChange={e => setExam3(e.target.value)}
              fullWidth
            />
            <Button type="submit" variant="contained">
              UPDATE
            </Button>
          </form>
        </DialogContent>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};

export default DialogForm;
