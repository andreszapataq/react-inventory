import { useState } from "react"
import Header from './components/Header'
import Inventario from './components/Inventario'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [inventario, setInventario] = useState([
    {
        codigo: "AT677FD",
        item: "DBM Putty 1.00 CC",
        cantidad: 4
    },
    {
        codigo: "AT678FD",
        item: "DBM Putty 2.50 CC",
        cantidad: 4
    },
    {
        codigo: "AT680FD",
        item: "DBM Putty 10.0 CC",
        cantidad: 18
    },
    {
        codigo: "AT804FD",
        item: "Cancellous Crushed/Chips 10 CC (1-4mm) FD",
        cantidad: 1
    },
    {
        codigo: "AT805FD",
        item: "Cancellous Crushed/Chips 10 CC (4-10mm) FD",
        cantidad: 2
    },
    {
        codigo: "AT305FD",
        item: "Tricortical Blk 8-15 MM FD",
        cantidad: 2
    },
    {
        codigo: "AT302FD",
        item: "Tricortical Blk 16-19 MM FD",
        cantidad: 1
    },
    {
        codigo: "AT308FD",
        item: "Tricortical Blk 20-29 MM FD",
        cantidad: 1
    },
    {
        codigo: "AT447FD",
        item: "Femoral Head",
        cantidad: 1
    }
])

  return (
    <div className="App">
      <Header title='Clínica X' />
      <Inventario inventario={inventario} />
    </div>
  )
}

export default App
