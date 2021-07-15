import { useState } from "react"
import Button from "./Button"

const Header = ({ title }) => {
    const [count, setCount] = useState(0)
    
    const onClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' onClick={onClick} />
            <p>You clicked {count} times</p>
        </header>
    )
}

Header.defaultProps = {
    title: "Inventario"
}

export default Header
