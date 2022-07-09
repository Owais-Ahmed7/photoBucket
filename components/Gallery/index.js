import React, { useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slider from "./Slider/index";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import AppContext from "../../context/AppContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'grid',
  placeContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  bgcolor: '#111',
  border: '0px solid red',
  overflow: 'hidden',
  boxShadow: 24,
  p: 4,
};

export default function Gallery() {

  //getting image source from context hook
  const { image, setImage } = useContext(AppContext);
  
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const medium = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState({
    src: null,
    id: null
  })

  const handleClose = () => setOpen(false);
  function imgClick(idx, imgSrc) {
    setImg({...img, src: imgSrc, id: idx});
    setOpen(true);
  }
  
  React.useEffect(() => {
    //pushing new image source to images array
    if(image) {
      setItemData([{ src: image }, ...itemData])
    }
  }, [image])

  //images array later will be replaced from database image serving
  const [itemData, setItemData] = React.useState([
    {
      src: '/img-1.jpg'
    },
    {
      src: '/img-2.jpg'
    },
    {
      src: '/img-1.jpg'
    },
    {
      src: '/img-3.jpg'
    },
    {
      src: '/img-3.jpg'
    },
    {
      src: '/img-1.jpg'
    },
    {
      src: '/img-2.jpg'
    },
    {
      src: '/img-1.jpg'
    },
  ])
  
  return (
    <Box sx={{ p: 2, pt: 4, mt: '2rem !important', m: 2,  textAlign: 'center', bgcolor: '#EDEDED' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Box sx={style}>
          <Box onClick={handleClose} sx={{position: 'absolute', top: '3%', right: '3%', color: '#FFF', cursor: 'pointer'}} >
            <CloseIcon />
          </Box>
          <Slider data={itemData} src={img.src} id={img.id} />
        </Box>
      </Modal>
      <ImageList variant="masonry" cols={extraSmall ? 2 : small ? 2 : medium ? 3 : 4} gap={4} sx={{overflowX: 'hidden', ml: 'auto', mr: 'auto', wrap: 'nowrap'}}>
        {itemData?.map((item, idx) => {
          return (
            <motion.div 
              whileHover={{opacity: 0.7}} 
              layout="position"   
              transition={{
                layout: {
                  duration: 1.5,
                },
              }} 
              key={idx}
            >
                <ImageListItem 
                  onClick={() => imgClick(idx, item.src)}
                  sx={{
                    cursor: 'pointer', 
                    marginBottom: '10px !important',
                    ml: '3px'
                  }}
                >
                  <img
                    src={item.src}
                    loading="lazy"
                    alt="mountains"
                  /> 
                </ImageListItem>
            </motion.div>
        )})}
      </ImageList>
    </Box>
  );
}