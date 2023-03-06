import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CSSBaseline, Grid, Toolbar, Container, CssBaseline } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container mxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>

            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello Everyone! This is the photo album I am trying to make it using materia-ui usages. Hello Everyone!
              This is the photo album I am trying to make it using materia-ui usages. Hello Everyone! This is the photo album I am trying to make it using materia-ui usages.Hello Everyone! This is the photo album I am trying to make it using materia-ui usages.
            </Typography>
          </Container>
        </div>

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </main>
    </>
  )
}

export default App