import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import SideNavbar from '../components/side_nav'
function MyApp({ Component, pageProps }) {
  return <><div className='side_navbar'><SideNavbar /></div><div className='main_div'><Component {...pageProps} /></div></>
}

export default MyApp
