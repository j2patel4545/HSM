import Image from "next/image";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import {heroparallax} from './components/ui/hero-parallax'

export default function Home() {
  return (
   <div>
    <BackgroundLinesDemo/>
    <heroparallax/>
     
    </div>
  );
}
