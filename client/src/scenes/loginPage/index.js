import React from 'react'
import { Box,Typography,useTheme,useMediaQuery } from '@mui/material'
import Form from './Form';

function loginPage() {
  const theme = useTheme()
  const isNoneMobileScreens = useMediaQuery("(min-width:1000px)")

  const alt = theme.palette.background.alt;

  return (
    <Box >
      <Box  width={"100%"}  background={alt} p="1rem 6%" textAlign={"center"} >
        <Typography
            fontWeight="bold"
            fontSize="32px"
            color="primary"
          >
            Chkopedia
          </Typography>
        </Box>
        <Box background={alt}  width={isNoneMobileScreens ? "50%":"93%"} m="2rem auto" p="2rem" borderRadius="1.5rem" textAlign={"center"}>
        <Typography
            fontWeight="500"
            variant='h5'
            mb="1.5rem"
          >
            Welcom to Chkopedia,the Social Media for Sociopath 
          </Typography>
          <Form />
        </Box>
    </Box>
  )
}

export default loginPage