import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer(){
    return(
        <div className='footercontainer'>
        <Box
        component="footer"
        sx={{
            width: "90%",
            py: 2,
            textAlign: "center",
            bgcolor: "grey.800",
            color: "white",
            borderRadius: "5px",
            marginBottom: "5px"
        }}
        >
        <Typography variant="body2">
            &copy; {new Date().getFullYear()} Adam Hlaváčik. All rights reserved.
        </Typography>
        </Box>
        </div>
    );
}

export default Footer