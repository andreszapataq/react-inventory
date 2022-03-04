const Item = ({ item }) => {
    return (
        <div className='item'>
            <div>
                <h3 className={item.nombre.length < 35 ? "text-item-xl" : "text-item-md"}>{item.nombre}</h3>
                <p>{item.codigo}</p>
            </div>
            <div className='item-cantidad'>
                <p>{item.cantidad}</p>
            </div>
        </div>
    )
}

export default Item
