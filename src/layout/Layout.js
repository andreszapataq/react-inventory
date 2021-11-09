import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, asesor, data }) => {
    return (
        <div>
            <Header asesor={asesor} data={data} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
