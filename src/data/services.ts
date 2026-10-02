import { AiOutlineFormatPainter } from "react-icons/ai";
import { FaFaucetDrip } from "react-icons/fa6";
import { MdElectricalServices } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { TbAssemblyFilled } from "react-icons/tb";
import type { ContentItem } from "../types";

const dataServices: ContentItem[] = [
  {
    icon: AiOutlineFormatPainter,
    title: "Imbiancatura",
    description:
      "Tinteggiatura di interni ed esterni, trattamenti antimuffa e anticondensa, decorazioni e verniciatura di porte, infissi e ringhiere.",
    color: "brand.primary",
  },
  {
    icon: FaFaucetDrip,

    title: "Riparazioni idrauliche",
    description:
      "Montaggio di sanitari, sostituzione di rubinetti e manutenzione degli scarichi.",
    color: "brand.yellow",
  },
  {
    icon: MdElectricalServices,
    title: "Lavori elettrici",
    description: "Sostituzione di prese e interruttori, installazione di lampadari e piccoli interventi elettrici.",
    color: "brand.blue",
  },
  {
    icon: BsDoorOpen,
    title: "Infissi e serramenti",
    description:
      "Riparazione di tapparelle, sigillatura degli spifferi e regolazione di porte e finestre.",
    color: "brand.purple",
  },
  {
    icon: TbAssemblyFilled,
    title: "Montaggio",
    description: "Montaggio di mobili, mensole e altri elementi per la casa.",
  },
];

export default dataServices;
