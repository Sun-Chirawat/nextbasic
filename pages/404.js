import { useRouter } from "next/router"
import Link from "next/link"

export default function Notfound() {
    return (
     <div>
      <h1>Sorry. That page is not found</h1>
      <p>Return to <Link href="/">Home</Link></p>
     </div>
    )
  }