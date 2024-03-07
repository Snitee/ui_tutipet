"use client"
import { Box, Grid} from "@mui/material";
import NavBar from "@/components/ui/public/profile/NavBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
    <Box sx={{paddingLeft: 20 , paddingRight: 20, paddingTop: 3}}>
        <Box sx={{}}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <NavBar />
            </Grid>
            <Grid item xs={9}>
            {children}
            </Grid>
        </Grid>
        </Box>
    </Box>
  );
}