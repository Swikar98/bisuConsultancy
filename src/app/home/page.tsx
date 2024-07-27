"use client";
import Text from "../../component/Text";
import ServicesMenu from "../../component/MainHome/ServicesMenu"
import HomeBackground from "../../component/MainHome/HomeBackground"
import Shape from "../../component/MainHome/Shape"
import Choose from "../../component/MainHome/chooseus"

export default function Home() {
  return (
    <>
      <HomeBackground  /> 
      <Shape/>
      <Choose/>
      {/* <Text /> */}
      <ServicesMenu/>
    </>
  );
}