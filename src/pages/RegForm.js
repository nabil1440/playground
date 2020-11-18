import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox
} from '@material-ui/core';

const RegForm = () => {
  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nID, setNID] = useState('');
  const [position, setPosition] = useState({
    one: false,
    two: false,
    three: false
  });
  const [resume, setResume] = useState('');

  async function submitForm(data) {
    try {
      await axios.post(
        'https://asia-east2-playground-taste.cloudfunctions.net/api/register',
        data
      );
      setName('');
      setEmail('');
      setPhone('');
      setNID('');
      setPosition({ one: false, two: false, three: false });
      setResume('');
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    let positions = [];
    const { one, two, three } = position;
    [one, two, three].forEach((item, index) => {
      item && positions.push(`Position ${index + 1}`);
    });

    const data = {
      name,
      email,
      phone,
      nID,
      resume,
      position: positions.join(', ')
    };

    submitForm(data);
  };

  const handleChange = e => {
    setPosition({ ...position, [e.target.name]: e.target.checked });
  };

  return (
    <Grid container spacing={2} justify="center" style={{ paddingTop: 80 }}>
      <Grid item lg={10} md={10} sm={11} xs={11}>
        <Typography variant="h2" align="right">
          التسجيل في برنامج التطوع
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            value={name}
            label="Name"
            onChange={e => setName(e.target.value)}
            fullWidth
          />
          <TextField
            value={email}
            label="Email"
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            value={phone}
            label="Phone Number"
            onChange={e => setPhone(e.target.value)}
            fullWidth
          />
          <TextField
            value={nID}
            label="NID number"
            onChange={e => setNID(e.target.value)}
            fullWidth
          />
          <FormControl component="fieldset">
            <FormLabel component="label">
              Select the position(s) you want to work in
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={position.one}
                    onChange={handleChange}
                    name="one"
                  />
                }
                label="Position 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={position.two}
                    onChange={handleChange}
                    name="two"
                  />
                }
                label="Position 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={position.three}
                    onChange={handleChange}
                    name="three"
                  />
                }
                label="Position 3"
              />
            </FormGroup>
          </FormControl>
          <TextField
            value={resume}
            label="Resume"
            onChange={e => setResume(e.target.value)}
            fullWidth
          />
          <Button color="primary" type="submit" fullWidth variant="contained">
            Register
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegForm;
