const Bodega = ({ bodega }) => {
    return (
        <div>
            <h2 className={bodega.nombre.length < 30 ? "text-list-section-xl" : "text-list-section-md"}>{bodega.nombre}</h2>
        </div>
    )
}

export default Bodega
