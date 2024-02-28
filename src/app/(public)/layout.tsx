import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      <main className=" flex justify-between flex-col mt-[254px]">
        <Header/>
        <div className="min-h-[1536px]">
        {children}
        </div>
        <Footer/>
      </main>

    </>
  );
}
