import '@/styles/globals.css'

//--INTERNAL IMPORTS
// import { NavBar, Footer } from '../components/componentsindex'

export default function App({ Component, pageProps }) {
    return (
        <div>
            {/* <NavBar /> */}
            <Component {...pageProps} />
            {/* <Footer /> */}
        </div>
    )
}
