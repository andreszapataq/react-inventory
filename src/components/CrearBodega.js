const CrearBodega = () => {
  return (
    <div className="CrearBodega">
      <div className="cb-bodega">
        <h3>Nombre de bodega</h3>
        <input type="text" />
      </div>
      <div className="cb-asesor">
        <h3>Asesor</h3>
        <select name="asesor" id="asesor">
          <option value="daniel-oliveros">Daniel Oliveros</option>
          <option value="vive-solutions">Vive Solutions</option>
        </select>
      </div>
      <div className="cb-buttons">
        <button className="btn btn-grey">Cancelar</button>
        <button className="btn btn-blue">Guardar</button>
      </div>
    </div>
  )
}

export default CrearBodega