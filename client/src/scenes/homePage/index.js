import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AdvertWidget from '../../widgets/AdvertWidget'
import FriendListWidget from '../../widgets/FriendListWidget'
import MyPostWidget from '../../widgets/MyPostWidget'
import PostsWidget from '../../widgets/PostsWidget'
import UserWidget from '../../widgets/UserWidget'
import Navbar from '../navBar'

function homePage() {
  const isNoneMobileScreen = useMediaQuery("(min-width:1000px)")
  const {_id,picturePath} = useSelector((state)=>state.user)
 
  return (
    <Box>
      <Navbar />
      <Box width={"100%"} padding="2rem 6%" display={isNoneMobileScreen ? "flex" :"block"} gap="0.5rem" justifyContent={"space-between"} >
        <Box flexBasis={isNoneMobileScreen ? "26%":undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box flexBasis={isNoneMobileScreen ? "42%":undefined}>
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNoneMobileScreen && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default homePage