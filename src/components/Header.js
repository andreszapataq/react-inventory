// import { useState } from "react"
import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
// import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    /* const [count, setCount] = useState(0)
    
    const onClick = () => {
        setCount(count + 1)
        console.log(count)
    } */

    // const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />} */}
            {/* <Button text='Add' onClick={onClick} /> */}
            {/* <p>You clicked {count} times</p> */}
        </header>
    )
}

Header.defaultProps = {
    title: "Bodega"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
