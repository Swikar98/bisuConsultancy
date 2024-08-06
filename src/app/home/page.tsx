"use client";
import Text from "../../component/Text";
import ServicesMenu from "../../component/ServicesMenu"
import HomeBackground from "../../component/MainHome/HomeBackground"
import Shape from "../../component/MainHome/Shape"
import Choose from "../../component/MainHome/chooseus"
import Slide from "../../component/MainHome/Crousel/showSlider"
import HeroSection from "../../component/MainHome/hero/herosection"

export default function Home() {
  return (
    <>
      <Slide/>
      <Choose/>
      <HeroSection/>
      <ServicesMenu/>
    </>
  );
}