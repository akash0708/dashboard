import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-60">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
