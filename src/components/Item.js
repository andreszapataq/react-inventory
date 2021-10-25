const Item = ({ item }) => {
    return (
        <div className='item'>
            <div>
                <h3>{item.item}</h3>
                <p>{item.codigo}</p>
            </div>
            <div className='item-cantidad'>
                <p>{item.cantidad}</p>
            </div>
        </div>
    )
}

export default Item
