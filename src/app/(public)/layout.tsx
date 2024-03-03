import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      <main className=" flex justify-between flex-col mt-[254px]">
        <Header/>
        <Box component={"div"} height={1550}>
          {children}
        </Box>
        <Footer/>
      </main>

    </>
  );
}
