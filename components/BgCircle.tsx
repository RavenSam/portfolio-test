import { motion } from "framer-motion"

type Props = {}

export default function BgCircle({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, scale: [1.8, 1.4, 1] }}
         transition={{ duration: 1 }}
         className="relative flex items-center justify-center"
      >
         <div className="absolute border  border-[#333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
         <div className="absolute border  border-[#333] rounded-full h-[300px] w-[300px] mt-52 " />
         <div className="absolute border  border-[#333] rounded-full h-[500px] w-[500px] mt-52 " />
         <div className="absolute border  border-[#557ce6] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
         <div className="absolute border  border-[#333] rounded-full h-[800px] w-[800px] mt-52 " />
      </motion.div>
   )
}
