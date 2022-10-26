import { useRouter } from "next/router"

export default function logout() {
const router = useRouter();
const {name} = router.query;
    return (
     <div>
      {name !== undefined && <h1>bye bye {name}</h1>}
     </div>
    )
  }
  