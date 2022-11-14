import Link from "next/link"
import { useRouter } from "next/router"
import Button from "../styles/button.module.css"
import Layout from "./components/layout";


export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* <Layout>*/}
      <h1>PICK ME UP!</h1>


      <form action="">
        <input type="text" placeholder="From:" />
        <input type="text" placeholder="To:" />
        <input type="text" placeholder="Date:" />
        <input type="text" placeholder="Time:" />
      </form>


      <button className={ Button.buttonlogout } onClick={() => router.push({
        pathname: '/login/logout',
        query: { "name": "mfu" }
      })}>Logout
      </button>
      {/* </Layout> */}
    </div>

  )
}
