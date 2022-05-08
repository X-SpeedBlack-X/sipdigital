import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './chart.css'

const Chart = ({ ...rest }) => {
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    /*  tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
        const component = `<span style="padding: 0.5rem; color:#000">${data}</span>`

        return component
      },
      style: {
        
      },
      } */
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#c3c3c3',
        background: '#000'
      },
      axisTicks: {},
      categories: [
        '2021-11-26T00:00:00.000Z',
        '2021-11-27T00:00:00.000Z',
        '2021-11-28T00:00:00.000Z',
        '2021-11-29T00:00:00.000Z',
        '2021-11-30T00:00:00.000Z',
        '2021-12-01T00:00:00.000Z',
        '2021-12-02T00:00:00.000Z'
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  }
  return (
    <div className="card-table">
      {' '}
      <h2 className="title">Relatório de vendas</h2>
      <ReactApexChart {...rest} options={options} />
    </div>
  )
}

export default Chart
