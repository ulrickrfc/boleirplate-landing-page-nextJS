import Document, { Html, Head, Main, NextScript } from 'next/document';
import Analytics from '../components/Analytics';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

          <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/vendor/icofont/icofont.min.css" rel="stylesheet" />
          <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="/vendor/venobox/venobox.css" rel="stylesheet" />
          <link href="/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
          <link href="/vendor/aos/aos.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" />

          <script src="/vendor/jquery/jquery.min.js" />
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
          <script src="/vendor/jquery.easing/jquery.easing.min.js" />
          <script src="/vendor/php-email-form/validate.js" />
          <script src="/vendor/waypoints/jquery.waypoints.min.js" />
          <script src="/vendor/counterup/counterup.min.js" />
          <script src="/vendor/venobox/venobox.min.js" />
          <script src="/vendor/owl.carousel/owl.carousel.min.js" />
          <script src="/vendor/isotope-layout/isotope.pkgd.min.js" />
          <script src="/vendor/aos/aos.js" />
          <script src="/js/main.js" />
          <link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
        </Head>
        <body>
          <Main />
          <Analytics />
          <NextScript />
        </body>
      </Html>
    );
  }
}
