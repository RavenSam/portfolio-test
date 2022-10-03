import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
   return (
      <div className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl mx-auto justify-evenly items-center pt-20">
         <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween" }}
            className="section-title"
         >
            About
         </motion.h2>

         <motion.img
            initial={{ y: 200, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            src="https://avatars.githubusercontent.com/u/61135465?v=4"
            className="-mb-20 md:mb-0 flex-shrink-0 w-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[370px] xl:h-[470px]"
         />

         <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="space-y-4 md:space-y-10 p-4 md:px-10 md:max-w-lg"
         >
            <h3 className="text-3xl md:text-4xl font-semibold">
               Something about <span className=" underline decoration-blue-600">me.</span>
            </h3>

            <p className=" text-gray-400">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga praesentium nulla sunt eos commodi
               quibusdam assumenda, expedita voluptatibus perferendis eum quis accusantium nostrum molestiae minus
               asperiores corporis quae nemo placeat, alias sit vitae natus, aliquam eaque. Sed earum eligendi placeat
               adipisci totam perspiciatis ut fugit, praesentium repellat.
            </p>
         </motion.div>
      </div>
   )
}
