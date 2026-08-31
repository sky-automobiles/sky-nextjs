"use client";
import Sidebar from "@/components/admin/Siderbar";
import { DataWrapper } from "@/context/index2";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Use useEffect to update showSidebar only on the client side
  useEffect(() => {
    // "token" is httpOnly (by design, so client-side JS can never read it and
    // steal it via XSS). "isAdmin" is the non-httpOnly cookie the login API
    // sets alongside it specifically so the client can check login state.
    const isAdmin = Cookies.get("isAdmin");
    if (!isAdmin && pathname !== "/admin/login") {
      toast.error("Please login first");
      router.push("/admin/login"); // Redirect to "/admin/login";
    }
  }, [pathname]);

  const showSidebar = pathname !== "/admin/login" && pathname !== "/admin";
  return (
    <section className="bg-slate-200">
      {showSidebar && (
        <Sidebar
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
          pathname={pathname}
        />
      )}
      <div
        className={`flex-1 min-h-screen ${
          pathname !== "/admin/login" && "pl-4 py-2"
        }  ${
          showSidebar ? (isCollapsed ? "ml-[85px]" : "ml-[255px]") : "ml-0"
        } transition-all duration-300`}
      >
        <DataWrapper>{children}</DataWrapper>
      </div>
    </section>
  );
}
