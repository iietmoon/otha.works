import React, { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-9">
                    <Header></Header>
                    {children}
                    <Footer></Footer>
                </div>
            </div>
        </main>
    );
}

export default Layout;
