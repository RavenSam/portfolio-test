import React from "react"
import { SocialIcon } from "react-social-icons"

type Props = {}

export default function Header({}: Props) {
   return (
      <header>
         <div className="flex items-center">
            {/* Social Icons */}
            <SocialIcon url="https://facebook.com/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://twitter.com/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://linkedin.com/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://youtube.com/" fgColor="gray" bgColor="transparent" />
         </div>

         <div className="flex items-center text-gray-300 cursor-pointer">
            <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
            <div className="uppercase hidden md:inline-flex text-sm text-gray-400">get in touch</div>
         </div>
      </header>
   )
}
