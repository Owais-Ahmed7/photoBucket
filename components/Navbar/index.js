import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Input = styled('input')({
    display: 'none',
});

export default function Navbar({ setSrc, setError }) {

  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const medium = useMediaQuery(theme.breakpoints.down('md'));

  const types = ["image/png", "image/jpg", "image/jpeg"]

  const uploadImg = (e) => {
    const selected = e.target.files[0];
    console.log(selected);
    if(selected && types.includes(selected.type)) {
      setSrc(URL.createObjectURL(selected));
      setError(false);
    } else {
      setSrc(null);
      setError(true);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#9DD6DF'}}>
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Box width={70} height={70}>
                <Image src={'/brand-logo.png'} width='70' height='70' layout="responsive" alt='Brand Logo' />
              </Box>
            </IconButton>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: small ? '18px' : '25px', color: '#080808' }}>
                PhotoBucket
            </Typography>
            <label htmlFor="icon-button-file">
                <Input onChange={uploadImg} accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span" sx={{position: 'relative'}}>
                    <Box width={70} height={70}>
                      <Image src={'/upload-logo.png'} width='70' height='70' layout="responsive" alt='Brand Logo' />
                    </Box>
                </IconButton>
            </label>
        </Toolbar>
      </AppBar>
    </Box>
  );
}