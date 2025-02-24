"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import CustomAppbar from "@/components/customAppbar";
import HeroSection from "@/components/home/heroSection";
import Mission from "@/components/home/mission";
import Initiatives from "@/components/home/initiatives";
import Agriculture from "@/components/home/agriculture";
import PollutionFreeEnv from "@/components/home/pollutionFreeEnv";
import Learning from "@/components/home/learning";
import Achievements from "@/components/home/achievements";
import Footer from "@/components/footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetLoginData } from "@/store/loginData";
import { resetCurrActiveNavItem } from "@/store/currActiveNavItem";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetLoginData());
    dispatch(resetCurrActiveNavItem());
  }, []);
  console.log("The env variable is ", process.env.NEXT_PUBLIC_NODE_ENV);
  return (
    <Box>
      <CustomAppbar />
      <HeroSection />
      <Mission />
      <Initiatives />
      <Agriculture />
      <Box sx={{ mt: 12 }} />
      <Learning />
      <Box sx={{ mt: 12 }} />
      <PollutionFreeEnv />
      <Box sx={{ mt: 12 }} />
      <Achievements />
      <Box sx={{ mt: 24 }} />
      <Footer />
    </Box>
  );
}
