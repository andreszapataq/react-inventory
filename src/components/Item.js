const Item = ({ item }) => {
    return (
        <div className='item'>
            <h3>{item.item}</h3>
            <p>{item.codigo}</p>
            <p>{item.cantidad}</p>
        </div>
    )
}

export default Item
