import Link from "next/link"
import { useRouter } from "next/router"
import buttonStyle from '../styles/button.module.css';
import Layout from "./components/layout";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* <Layout>       */}
      <h1>Hello Next</h1>
      <button className={buttonStyle.success} onClick={() => router.push('/about')}>Go to About</button>
      <button onClick={() => router.replace('/login')}>Go to Login</button>
      <button 
      onClick={() => router.push({
          pathname: '/login/logout',
          query: {"name": "mfu"}
        })}>Logout
        </button>
        {/* </Layout> */}
    </div>
    
  )
}
