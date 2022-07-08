import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Carousel from "./Carousel/index";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

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

export default function Gallery({ error, src }) {

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
    if(src) {
      setItemData([{ src: src }, ...itemData])
    }
  }, [src])

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
    <Box sx={{p: 2, pt: 4, textAlign: 'center'}}>
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
          <Carousel data={itemData} src={img.src} id={img.id} />
        </Box>
      </Modal>
      <ImageList variant="masonry" cols={extraSmall ? 2 : small ? 2 : medium ? 3 : 4} gap={4} sx={{overflowX: 'hidden', ml: 'auto', mr: 'auto', wrap: 'nowrap'}}>
        {itemData?.map((item, idx) => {
          return (
            <motion.div whileHover={{opacity: 0.7}} layout="position"   
              transition={{
                layout: {
                  duration: 1.5,
                },
              }} key={idx}>
                <ImageListItem 
                  onClick={() => imgClick(idx, item.src)} 
                  key={item.img} 
                  sx={{
                    cursor: 'pointer', 
                    marginBottom: '10px !important',
                    ml: '3px'
                  }}
                >
                  <img 
                    // style={{marginLeft: '3px'}}
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