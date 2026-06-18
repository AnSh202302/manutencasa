import { AiOutlineFormatPainter } from "react-icons/ai";
import { FaFaucetDrip } from "react-icons/fa6";
import { MdElectricalServices } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { TbAssemblyFilled } from "react-icons/tb";

const dataServices = [
  {
    icon: AiOutlineFormatPainter,
    title: "Imbianchino",
    description:
      "Tinteggiatura interni ed esterni, trattamenti antimuffa e anti condensa, decorazioni, verniciatura di porte, infissi e ringhiere",
    color: "brand.primary",
  },
  {
    icon: FaFaucetDrip,

    title: "Riparazioni Idrauliche",
    description:
      "Montaggiosanitari, sostituzione rubinetti, manutenzioni scarichi",
    color: "brand.yellow",
  },
  {
    icon: MdElectricalServices,
    title: "Lavori Elettrici",
    description: "sostituzione prese, installazione lampadari",
    color: "brand.blue",
  },
  {
    icon: BsDoorOpen,
    title: "Infissi e Serramenti",
    description:
      "riparazione tapparelle, sigillatura spifferi, regolazione porte e finestre",
    color: "brand.purple",
  },
  {
    icon: TbAssemblyFilled,
    title: "Montaggio",
    description: "montaggio mobili e mensole",
  },
];

export default dataServices;
