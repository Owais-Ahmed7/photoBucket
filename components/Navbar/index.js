import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Styles from "../../styles/Navbar.module.css";
//import update hook
import AppContext from "../../context/AppContext";

const Input = styled('input')({
    display: 'none',
});

const Navbar = () => {

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const types = ["image/png", "image/jpg", "image/jpeg"]

  //destructure hook and use set Image
  const { image, setImage } = useContext(AppContext);

  const uploadImg = (e) => {
    const selected = e.target.files[0];
    if(selected && types.includes(selected.type)) {
      //updating image src in context hook
      setImage(URL.createObjectURL(selected))
    } else {
      //if no image selected set to null
      setImage(null)
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
            <label htmlFor="icon-button-file" className={Styles.brand_logo}>
                <Input onChange={uploadImg} accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span" sx={{position: 'relative'}}>
                    <Box width={70} height={70}>
                      <Image src={'/upload-logo.png'} width='70' height='70' layout="responsive" alt='Brand Logo' />
                      <img src={'/plus-logo.png'} className={Styles.animate_icon} alt='Plus Logo' />
                    </Box>
                </IconButton>
            </label>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;