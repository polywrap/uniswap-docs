import React from 'react';
import Layout from "@theme/Layout";
import Showcase from "../components/Showcase";
import SocialCallout from "../components/SocialCallout";
import { darkTheme } from "../mui-theme";
import { ThemeProvider } from "@mui/material";
import TitleCard from "@site/src/components/TitleCard";

export default function Home() {
  return (
    <Layout>
      <ThemeProvider theme={darkTheme}>
        <TitleCard/>
        <Showcase/>
        <SocialCallout/>
      </ThemeProvider>
    </Layout>
  );
}
