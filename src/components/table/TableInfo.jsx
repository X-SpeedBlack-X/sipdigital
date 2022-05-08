import React from 'react'
import Pagination from '../pagination/Pagination'
import './table.css'

const TableInfo = () => {
  return (
    <div className="card-table">
      <h2>Ultimos pedidos realizados</h2>

      <table cellSpacing={0} cellPadding={9}>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Data e Horário</th>
            <th>Produtos</th>
            <th>Total</th>
            <th>Comprador</th>
            <th>Status dos pedidos</th>
            <th>Ação Recomendada</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>0112466</td>
            <td>30/07/2021 - 15:49</td>
            <td>
              <span>Ver (Quantidade)</span>
            </td>
            <td>R$ 200,00</td>
            <td>Comprador A </td>
            <td>Pronta para embalar</td>
            <button>MARCAR COMO EMBALADO</button>
          </tr>

          <tr>
            <td>0112466</td>
            <td>30/07/2021 - 15:49</td>
            <td>
              <span>Ver (Quantidade)</span>
            </td>
            <td>R$ 200,00</td>
            <td> Comprador A </td>
            <td>Pronta para embalar</td>
            <button>MARCAR COMO EMBALADO</button>
          </tr>

          <tr>
            <td>0112466</td>
            <td>30/07/2021 - 14:17</td>
            <td>
              <span>Ver (Quantidade)</span>
            </td>
            <td>R$ 200,00</td>
            <td>Comprador A </td>
            <td>Pronta para embalar</td>
            <button>MARCAR COMO EMBALADO</button>
          </tr>

          <tr>
            <td>0112466</td>
            <td>29/07/2021 - 22:07</td>
            <td>
              <span>Ver (Quantidade)</span>
            </td>
            <td>R$ 200,00</td>
            <td>Comprador A</td>
            <td>Pronta para embalar</td>
            <button>MARCAR COMO EMBALADO</button>
          </tr>

          <tr>
            <td>0112466</td>
            <td>29/07/2021 - 22:07</td>
            <td>
              <span>Ver (Quantidade)</span>
            </td>
            <td>R$ 200,00</td>
            <td>Comprador A</td>
            <td>Pronta para embalar</td>
            <button>MARCAR COMO EMBALADO</button>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default TableInfo
