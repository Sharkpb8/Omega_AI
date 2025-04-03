import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer(){
    return(
        <>
        <Box
        component="footer"
        sx={{
            width: "100%",
            py: 2,
            textAlign: "center",
            bgcolor: "grey.800",
            color: "white",
            borderRadius: "5px",
            marginBottom: "5px"
        }}
        >
        <Typography variant="body2">
            &copy; {new Date().getFullYear()} Adam Hlaváčik. Všechna práva vyhrazena.
        </Typography>
        </Box>
        </>
    );
}

export default Footer