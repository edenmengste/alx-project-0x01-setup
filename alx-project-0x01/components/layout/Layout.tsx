import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-8 py-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
