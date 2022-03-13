const Lote = ({ el }) => {
  console.log(el)
  
  return (
    <div className="item">
      <h3 className="text-lote-xl">{el.lote}</h3>
      <p>{el.fecha_vencimiento}</p>
    </div>
  )
}

export default Lote