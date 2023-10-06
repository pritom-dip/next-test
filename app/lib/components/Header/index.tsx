import Link from "next/link"

const Header = () => {
    return (
      <div>
          <ul className="flex gap-2 ">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/about"}>About</Link></li>
              <li><Link href={"/services/bike"}>Bike</Link></li>
              <li><Link href={"/services/cycle"}>Cycle</Link></li>
          </ul>
      </div>
    )
  }
  
  export default Header