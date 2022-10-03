import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
   return (
      <header className="sticky top-0 flex p-5 justify-between max-w-7xl mx-auto z-20">
         <motion.div
            initial={{ x: -300, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center"
         >
            {/* Social Icons */}
            <SocialIcon url="https://facebook.com/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://twitter.com/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://linkedin.com/" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://youtube.com/" fgColor="gray" bgColor="transparent" />
         </motion.div>

         <motion.div
            initial={{ x: 300, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center text-gray-300 cursor-pointer"
         >
            <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
            <div className="uppercase hidden md:inline-flex text-sm text-gray-400">get in touch</div>
         </motion.div>
      </header>
   )
}
