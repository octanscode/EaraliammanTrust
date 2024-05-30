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
import Volunteer from "@/components/home/volunteer";
import Achievements from "@/components/home/achievements";
import Footer from "@/components/footer";

export default function Home() {
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
      <Volunteer />
      <Box sx={{ mt: 12 }} />
      <Achievements />
      <Box sx={{ mt: 24 }} />
      <Footer />
    </Box>
  );
}
