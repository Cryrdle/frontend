import '@/styles/globals.css'

//--INTERNAL IMPORTS
import { CryrdleProvider } from '../Context/CryrdleContext'
import { Footer } from '../components/componentsindex'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <CryrdleProvider>
                {/* <NavBar /> */}
                <Component {...pageProps} />
                <Footer />
            </CryrdleProvider>
        </div>
    )
}
