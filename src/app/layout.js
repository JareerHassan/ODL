import './globals.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from '@/mainfolder/sections/common/header1';
import Footer from '@/mainfolder/sections/common/footer';
import Script from 'next/script';
import "lightcase/src/css/lightcase.css";

export const metadata = {
  title: 'Oxmite Digital LTD',
  description: 'Professional business website for digital services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
        <link rel="manifest" href="/manifest.json" />

        {/* External CSS */}
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/loader.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/feather.css" />
        <link rel="stylesheet" href="/assets/css/lc_lightbox.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      </head>

      <body>
        <Header1 />
        {children}
        <Footer />

        {/* External JS */}
        <Script src="/assets/js/jquery-3.6.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        {/* <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" /> */}
        <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/waypoints-sticky.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/theia-sticky-sidebar.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/lc_lightbox.lite.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
