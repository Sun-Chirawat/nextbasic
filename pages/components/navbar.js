import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>     
      <li><Link href="/">ตาราง</Link></li>
      <li><Link href="/about">โพสต์</Link></li>  
      <li><Link href="/about">โปรโมชั่น</Link></li>    
      <li><Link href="/about">ติดต่อ</Link></li>      
    </nav>
);
}
 
export default Navbar;