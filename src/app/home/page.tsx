"use client";
import Text from "../../component/Text";
import ServicesMenu from "../../component/MainHome/ServicesMenu"
import HomeBackground from "../../component/MainHome/HomeBackground"
import Shape from "../../component/MainHome/Shape"
import Choose from "../../component/MainHome/chooseus"
import MainCrousel from '../../component/MainHome/maincrousel'
import Australiaimage from "../../component/MainHome/gif"

export default function Home() {
  return (
    <>
      <HomeBackground  /> 
      <Shape/>
      <Choose/>
      <ServicesMenu/>
    </>
  );
}