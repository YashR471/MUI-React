import { Stack,Skeleton,Box,Typography,Avatar } from "@mui/material"
import { useState,useEffect } from "react"

function MuiSkeleton() {
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },  3000);
  },[])
  return (
    // <Stack spacing={1} width={250}>
    //   <Skeleton variant="text"/>
    //   <Skeleton variant="circular" width="60px" height="60px"/>
    //   <Skeleton variant="rectangular" width="250px" height="150px"/>
    //   <Skeleton variant="text" animation="wave"/>
    //   <Skeleton variant="circular" width="60px" height="60px" animation="wave"/>
    //   <Skeleton variant="rectangular" width="250px" height="150px" animation="wave"/>
    // </Stack>
    <Box sx={{width:"300px"}}>
      {
        loading? (
          <Skeleton variant="rectangular" width={256} height={144} animation="wave"/>
        ):(
          <img src="https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg" width={256} height={144}/>
        )
      }
      <Stack direction="row" spacing={1} sx={{width:"100%",marginTop:"12px"}}>
        {
          loading? (
            <Skeleton variant="circular" width={40} height={40} animation="wave"/>
          ):(
            <Avatar src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"></Avatar>
          )
        }
        <Stack>
          {
            loading?(
              <>
              <Typography variant="body1">
                <Skeleton variant="text" width="200px" animation="wave"/>
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="200px" animation="wave"/>
              </Typography>
              </>
            ):(
              <>
                <Typography variant="body1">React Mui Tutorial</Typography>
              <Typography variant="body2">Hope you will enjoy!</Typography>
              </>
            )
          }
        </Stack>
      </Stack>
    </Box>
  )
}

export default MuiSkeleton


//AWESOME COMPONENT!!