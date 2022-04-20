import { useLocation } from "react-router-dom"

const LotePage = ({ bodegas }) => {
  let location = useLocation()
  const bodega = location.state?.bodega?.nombre

  return (
    <div className="LotePage">
      <div className="lp-title">
        <h3>Bodega actual</h3>
        <p>{bodega}</p>
      </div>
      <div className="lp-selection">
        <h3>Trasladar a...</h3>
        <select name="bodega" id="bodega">
          {bodegas.map(item => (
            <option key={item._id} value={item.nombre}>{item.nombre}</option>
          ))}
          {/* <option value="bodega-1">Bodega 1</option>
          <option value="bodega-2">Bodega 2</option>
          <option value="bodega-3">Bodega 3</option> */}
        </select>
      </div>
      <div className="lp-notes">
        <h3>Notas</h3>
        <textarea name="notas" id="notas" cols="50" rows="4"></textarea>
      </div>
      <div className="lp-buttons">
        <button className="btn btn-grey">Cancelar</button>
        <button className="btn btn-blue">Guardar</button>
      </div>
    </div>
  )
}

export default LotePage