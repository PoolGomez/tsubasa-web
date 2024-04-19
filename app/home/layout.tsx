"use client";
import '@/app/ui/global.css';
import "@/app/ui/satoshi.css";

import Sidebar from '@/app/ui/layout/sidebar/sidebar';
import { useState } from 'react';
import Header from '@/app/ui/layout/header/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    
    <div className="dark:bg-boxdark-2 dark:text-bodydark">

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
          <div className="mx-auto p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      </div>
      
    </div>
  );
}