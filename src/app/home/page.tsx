"use client";
import Text from "../../component/Text";
import ServicesMenu from "../../component/MainHome/ServicesMenu"
import DestinationMenu from "../../component/MainHome/DestinationMenu"
import HomeBackground from "../../component/MainHome/HomeBackground"
import Shape from "../../component/MainHome/Shape"
import Choose from "../../component/MainHome/chooseus"

export default function Home() {
  return (
    <>
      <HomeBackground  /> 
      <DestinationMenu/>
      <Shape/>
      <Choose/>
      <Text />
      <ServicesMenu/>
    


    </>
  );
}