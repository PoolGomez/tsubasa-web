"use client";
import { useState } from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(
        <div className="flex h-screen overflow-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />

            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* <!-- ===== Header Start ===== --> */}
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main>
                <div className="mx-auto p-4 md:p-6 2xl:p-10">{children}</div>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
          </div>
    )
}