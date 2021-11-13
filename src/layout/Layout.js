import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, asesor, bodega, isHome }) => {
    return (
        <div>
            <Header asesor={asesor} bodega={bodega} isHome={isHome} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
