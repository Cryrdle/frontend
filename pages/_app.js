//--INTERNAL IMPORTS
// import '../public/styles/global.css'
import '../styles/globals.css'

import { CryrdleProvider } from '../Context/CryrdleContext'
import { Header, Footer } from '../components/componentsindex'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <CryrdleProvider>
                <Header />
                <Component {...pageProps} />
                {/* <Footer /> */}
            </CryrdleProvider>
        </div>
    )
}
