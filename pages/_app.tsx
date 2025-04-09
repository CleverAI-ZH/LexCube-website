import '../styles/globals.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Head from 'next/head';

<Head>
  <title>LexCube – Ihre autarke KI für Schweizer Kanzleien</title>
  <meta name="description" content="LexCube ist Ihre datenschutzkonforme KI-Box für den juristischen Alltag – lokal betrieben, blitzschnell, ohne Cloud." />
  <meta name="keywords" content="KI Kanzlei, juristische KI, Schweizer Legal Tech, DSGVO KI, lokale AI, LexCube, Anwaltssoftware, KI Agent, AI Schweiz" />
  <meta name="author" content="CleverAI GmbH" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://lexcube.ai/" />
  <meta name="language" content="de" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="LexCube – Ihre autarke KI für Kanzleien" />
  <meta property="og:description" content="100 % lokal. 0 % Cloud. Die KI für Schweizer Anwaltskanzleien." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lexcube.ai/" />
  <meta property="og:image" content="https://lexcube.ai/og-image.png" />
  <meta property="og:locale" content="de_CH" />
</Head>

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
