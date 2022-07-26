import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Topbar } from "../styles/styled/topNav.styled";

const Navbar = () => {

  const [navData, setNavData] = useState(null);
  const [logoPath, setlogoPath] = useState('');
  const [links, setlinks] = useState();


  useEffect(() => {
    axios.get(`https://api.storyblok.com/v2/cdn/stories/header?version=draft&token=Fng0zxrBaX7QHQZ1eEYUVwtt&cv=1658658748`)
      .then(res => {
        const persons = res.data;
        setNavData(res.data)
        console.log(res.data.story.content.nav);
        setNavData(res.data.story.content.nav);
        setlogoPath(res.data.story.content.header_logo[0].logo.filename)
      })
  }, []);

  return (
    <Topbar>
      <img className="logo" src={logoPath} alt="" />
      <ul className="nav">
        {
          navData && navData.map((link) => (
            <li> <Link href={link.link.url}><a>{link.name} </a></Link> </li>
          ))
        }
      </ul>

    </Topbar>
  );
}

export default Navbar;