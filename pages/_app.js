import RouterLayout from '../components/common/RouterLayout';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './../styles/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <RouterLayout>
      <Component {...pageProps} />
    </RouterLayout>
  )
}

export default MyApp
