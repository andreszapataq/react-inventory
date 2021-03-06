import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CrearBodega = ({ asesores }) => {
  const [bodegaName, setBodegaName] = useState('')
  const [asesorId, setAsesorId] = useState('')

  const navigate = useNavigate()

  return (
    <div className="CrearBodega">
      <div className="cb-bodega">
        <h3>Nombre de bodega</h3>
        <input type="text" placeholder="Ponle nombre a tu bodega" value={bodegaName} onChange={(e) => {
          setBodegaName(e.target.value)
        }} />
      </div>
      <div className="cb-asesor">
        <h3>Asesor</h3>
        <select name="asesor" id="asesor" onChange={(e) => setAsesorId(e.target.value)}>
          {asesores.map(asesor => (
            <option key={asesor._id} value={asesor._id}>{asesor.asesor}</option>
          ))}
        </select>
      </div>
      <div className="cb-buttons">
        <button className="btn btn-grey" onClick={() => navigate(-1)}>Cancelar</button>
        <button className="btn btn-blue" onClick={() => axios.post('http://localhost:5004/api/v1/crear-bodega', {
          nombre: bodegaName,
          asesor_id: asesorId
        })}>Guardar</button>
      </div>
    </div>
  )
}

export default CrearBodega