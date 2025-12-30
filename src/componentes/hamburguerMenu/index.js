import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { FaRegUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { LuNewspaper } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { CgGhost } from "react-icons/cg";




const MenuHamburguer = styled.body`


    `


function HamburguerMenu() {
    return (
<MenuHamburguer>
    <details>
        <summary>
            <CgGhost name="menu-outline" className='icone'/>
            <span>Menu</span>

        </summary>
        <ul>
            <li>
                <IoHomeOutline name="home-outline" className='icone' />
                <span>Home</span>
            </li>
            <li>
                <CiUser name="person-outline"className='icone'/>
                <span>Profile</span>
            </li>
            <li>
                <LuNewspaper name="newspaper-outline" className='icone'/>

                <span>Blog</span>
            </li>
        </ul>
    </details>
</MenuHamburguer>
    )
}

export default HamburguerMenu