import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

import CartProvider from '@store/Cart';

/**report web vital with next */
// export function reportWebVitals(metric) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
