import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DialogForm from '../components/DialogForm';

const TableData = () => {
  const [data, setData] = useState([
    {
      name: 'Name',
      id: '123',
      email: 'Email',
      phone: 'Phone Number',
      nID: 'National ID',
      resume: 'I am a programmer',
      position: 'positions',
      exam1: 'result',
      exam2: 'result',
      exam3: 'result'
    }
  ]);

  async function getData() {
    try {
      const res = await axios.get(
        'https://asia-east2-playground-taste.cloudfunctions.net/api/volunteers'
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={2} justify="center" style={{ paddingTop: 80 }}>
      <Grid item lg={10} md={10} sm={11} xs={11}>
        <Typography variant="h2">Submissions</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ fontWeight: 'bold' }}>
              <TableRow>
                <TableCell>Exam three</TableCell>
                <TableCell>Exam two</TableCell>
                <TableCell>Exam one</TableCell>
                <TableCell>Resume</TableCell>
                <TableCell>Positions(s)</TableCell>
                <TableCell>NID Number</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(
                ({
                  name,
                  email,
                  phone,
                  nID,
                  position,
                  resume,
                  exam1,
                  exam2,
                  exam3,
                  id
                }) => (
                  <TableRow key={Math.random()}>
                    <TableCell>{exam3}</TableCell>
                    <TableCell>{exam2}</TableCell>
                    <TableCell>{exam1}</TableCell>
                    <TableCell>{resume}</TableCell>
                    <TableCell>{position}</TableCell>
                    <TableCell>{nID}</TableCell>
                    <TableCell>{phone}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                      <DialogForm id={id} name={name} />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TableData;
