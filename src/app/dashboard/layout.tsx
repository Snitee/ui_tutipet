import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidenav from "../ui/dashboard/Sidenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
        <Sidenav>
            {children}
        </Sidenav>
    </>
  );
}
