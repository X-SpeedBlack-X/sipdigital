import React, { useState } from 'react'
import './nav.css'
import { FaChartPie } from 'react-icons/fa'
import { IoMdGlasses } from 'react-icons/io'
import { RiFileAddFill } from 'react-icons/ri'
import { MdPeopleAlt } from 'react-icons/md'
import { MdAdminPanelSettings } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState('#')

  return (
    <nav>
      <div className="container">
        <aside className="aside-bar">
          <h1 className="logo">LOGO</h1>
          <a
            onClick={() => setActiveMenu('#dashboard')}
            className={activeMenu === '#dashboard' ? 'active' : ' '}
            href="#dashboard"
          >
            <FaChartPie className="icon-aside" /> Dashboard
          </a>

          <a
            onClick={() => setActiveMenu('#requests')}
            className={activeMenu === '#requests' ? 'active' : ' '}
            href="#requests"
          >
            <RiFileAddFill className="icon-aside" /> Pedidos
          </a>

          <a
            onClick={() => setActiveMenu('#products')}
            className={activeMenu === '#products' ? 'active' : ' '}
            href="#products"
          >
            <IoMdGlasses className="icon-aside" /> Produtos
          </a>

          <a
            onClick={() => setActiveMenu('#customers')}
            className={activeMenu === '#customers' ? 'active' : ' '}
            href="#customers"
          >
            <MdPeopleAlt className="icon-aside" />
            Clientes
          </a>

          <a
            onClick={() => setActiveMenu('#finance')}
            className={activeMenu === '#finance' ? 'active' : ' '}
            href="#finance"
          >
            <FaDollarSign className="icon-aside" />
            Financeiro
          </a>

          <a
            onClick={() => setActiveMenu('#user')}
            className={activeMenu === '#user' ? 'active' : ' '}
            href="#user"
          >
            <MdAdminPanelSettings className="icon-aside" /> Usuário
          </a>
          <a
            onClick={() => setActiveMenu('#logout')}
            className={activeMenu === '#logout' ? 'active' : ' '}
            href="#logout"
          >
            <AiOutlineLogout className="icon-aside" /> Logout
          </a>
        </aside>
      </div>
    </nav>
  )
}

export default Nav
