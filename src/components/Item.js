const Item = ({ item }) => {
    console.log(item)
    return (
        <div className='item'>
            <div>
                <h3>{item.producto}</h3>
                <p>{item.codigo}</p>
            </div>
            <div className='item-cantidad'>
                <p>{item.cantidad}</p>
            </div>
        </div>
    )
}

export default Item
