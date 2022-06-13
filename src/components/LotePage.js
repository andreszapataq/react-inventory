import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const LotePage = ({ bodegas }) => {
  const [notas, setNotas] = useState('')
  let location = useLocation()
  const bodega = location.state?.bodega?.nombre

  const navigate = useNavigate()

  return (
    <div className="LotePage">
      <div className="lp-title">
        <h3>Bodega actual</h3>
        <p>{bodega}</p>
      </div>
      <div className="lp-selection">
        <h3>Trasladar a</h3>
        <select name="bodega" id="bodega">
          {bodegas.map(item => (
            <option key={item._id} value={item.nombre}>{item.nombre}</option>
          ))}
        </select>
      </div>
      <div className="lp-notes">
        <h3>Notas</h3>
        <textarea name="notas" id="notas" placeholder="Escribe notas acerca de este lote..." cols="50" rows="4" value={notas} onChange={(e) => {
          setNotas(e.target.value)
        }}></textarea>
      </div>
      <div className="lp-buttons">
        <button className="btn btn-grey" onClick={() => navigate(-1)}>Cancelar</button>
        <button className="btn btn-blue" onClick={() => axios.post('http://localhost:5004/api/v1/lote', {
          notas: notas
        })}>Guardar</button>
      </div>
    </div>
  )
}

export default LotePage