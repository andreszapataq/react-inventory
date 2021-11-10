import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, asesor, bodega }) => {
    return (
        <div>
            <Header asesor={asesor} bodega={bodega} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
