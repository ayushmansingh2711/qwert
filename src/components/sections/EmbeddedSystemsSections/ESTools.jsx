import React from 'react'
import Tools from "../../common/Tools";
const ESTools = () => {
  const toolsArray = [
    {
      color: "orange2",
      img: "/motors-icon.png",
      name: "Motors",
    },
    {
      color: "orange",
      img: "/sensor-icon.png",
      name: "Sensors",
    },
    {
      color: "blue2",
      img: "/pcoDesign-icon.png",
      name: "PCB Design",
    },
    {
      color: "Darkblue",
      img: "/Bluetooth-icon.png",
      name: "Bluetooth",
    },
    {
      color: "red2",
      img: "/GPS-icon.png",
      name: "GPS",
    },
    {
      color: "blue3",
      img: "/rfid-icon.png",
      name: "RFID",
    },
    {
      color: "green",
      img: "/pwm-icon.png",
      name: "PWM",
    },
    {
      color: "blue3",
      img: "/gpio-icon.png",
      name: "GPIO",
    },
    {
      color: "blue3",
      img: "/gsm-icon.png",
      name: "GSM",
    },
    {
      color: "blue3",
      img: "/microcontroller-icon.png",
      name: "Microcontroller",
    },
  ];
  return (
    <div>
    <Tools toolsArray={toolsArray} />
  </div>
  )
}

export default ESTools