import { apiPlugin, storyblokInit } from '@storyblok/react';
import Layout from '../components/layout'
import '../styles/globals.css'
import GlobalStyles from '../styles/styled/global.styled'



storyblokInit({
  accessToken: "Fng0zxrBaX7QHQZ1eEYUVwtt",
  use: [apiPlugin]
});



function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
