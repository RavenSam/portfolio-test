import Link from "next/link"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { SocialIcon } from "react-social-icons"
import BgCircle from "./BgCircle"

type Props = {}

export default function Hero({}: Props) {
   const [text] = useTypewriter({
      words: ["Hi, Sam here", "Developer", "Designer", "Probleme Solver"],
      // loop:true,
      delaySpeed: 2000,
   })

   return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
         <BgCircle />

         <img src="https://avatars.githubusercontent.com/u/61135465?v=4" className="h-40 rounded-full" />

         <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-3 tracking-[15px]">Software Engineer</h2>

            <h1 className="text-5xl lg:text-6xl font-semibold ">
               <span className="my-3">{text}</span>
               <Cursor cursorColor="#557ce6" />
            </h1>

            <div className="mt-5 space-x-4">
               <Link href="#about">
                  <button className="btn-hero">About</button>
               </Link>
               <Link href="#experience">
                  <button className="btn-hero">Experience</button>
               </Link>

               <Link href="#skills">
                  <button className="btn-hero">Skills</button>
               </Link>

               <Link href="#projects">
                  <button className="btn-hero">Projects</button>
               </Link>
            </div>
         </div>
      </div>
   )
}
