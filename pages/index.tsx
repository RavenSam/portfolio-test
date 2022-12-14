import type { NextPage } from "next"
import Head from "next/head"

// Components
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"

const HomePage: NextPage = () => {
   return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
         <Head>
            <title>Create Next App</title>
         </Head>

         <Header />

         <section id="hero" className="snap-center">
            <Hero />
         </section>

         <section id="about" className="snap-center">
            <About />
         </section>

         <section id="experience" className="snap-center">
            <Experience />
         </section>
      </div>
   )
}

export default HomePage
