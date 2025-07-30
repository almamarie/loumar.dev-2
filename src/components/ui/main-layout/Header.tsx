"use client";
import { usePathname } from "next/navigation";
import React from "react";
import MainHeader from "./MainHeader";
import ProjectsHeader from "./ProjectsHeader";

const Header = () => {
  const pathName = usePathname();

  const isProjectsPage = pathName?.split("/").pop() === "projects";
  if (!isProjectsPage) {
    return <MainHeader />;
  } else {
    return <ProjectsHeader />;
  }
};

export default Header;
