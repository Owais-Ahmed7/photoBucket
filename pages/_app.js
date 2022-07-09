import '../styles/globals.css'
import AppState from "../context/AppState"  //use contexthook is same as redux but its built in with react 

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}

export default MyApp
