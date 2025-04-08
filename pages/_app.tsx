import '../styles/globals.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  return (
    <>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-5Q82VRX2'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5Q82VRX2');`,
        }}
      />

      <Component {...pageProps} />

      {showBanner && (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-white border border-gray-200 shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
          <p className="text-sm text-gray-700">
            Diese Website verwendet Cookies, um das Nutzererlebnis zu verbessern.
          </p>
          <button
            onClick={acceptCookies}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            OK, verstanden
          </button>
        </div>
      )}
    </>
  );
}
