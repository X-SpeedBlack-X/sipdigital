import React from 'react'
import './main.css'
import TableInfo from '../table/TableInfo'
import { BiSearch } from 'react-icons/bi'
import { FaStoreAlt } from 'react-icons/fa'
import { IoPeopleCircleSharp } from 'react-icons/io5'
import { BiBook } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { BsBellFill } from 'react-icons/bs'
import Photo from '../../assets/multicolor-designify.png'
import Chart from '../chart/Chart'

const Main = () => {
  const series = [
    { name: 'first-series', data: [31, 120, 321, 10, 28, 109, 18] }
  ]
  return (
    <main>
      <header className="header">
        <div className="search-main">
          <BiSearch className="icon-search" />
          <input
            className="search
            "
            placeholder="Pesquisar"
            type="text"
          />
        </div>

        <div className="bell-user">
          <span>9</span>
          <BsBellFill className="icon-bell" />
          <img src={Photo} alt="Foto de perfil" className="user-photo" />
        </div>
      </header>

      <div className="cards">
        <div className="card">
          <FaStoreAlt className="icon-main" />
          <div>
            <h3>Unidades Registradas</h3>
            <small>1</small>
          </div>
        </div>

        <div className="card">
          <IoPeopleCircleSharp className="icon-main" />
          <div>
            <h3>Novos Clientes</h3>
            <small>104</small>
          </div>
        </div>

        <div className="card">
          <BiBook className="icon-main" />
          <div>
            <h3>Vendas Realizadas</h3>
            <small>7270</small>
          </div>
        </div>

        <div className="card">
          <MdAttachMoney className="icon-main" />
          <div>
            <h3>Lucro Liquido (Geral)</h3>
            <small>R$ 427.300,50</small>
          </div>
        </div>
      </div>

      <Chart series={series} type="area" height={300} />
      <TableInfo />
    </main>
  )
}

export default Main
