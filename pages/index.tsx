import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"

const HomePage: NextPage = () => {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
         </Head>

         <Header />
      </div>
   )
}

export default HomePage
