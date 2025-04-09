import Image from "next/image";
import Head from 'next/head';

export async function getServerSideProps() {
  return { props: {} };
}

export default function ComingSoon() {
  return (
    <>
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 text-center px-4">
        <Image
          src="/logo-lexcube.webp"
          alt="LexCube Logo"
          width={160}
          height={160}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">LexCube</h1>
        <p className="text-lg">Unsere neue Website ist bald verfügbar.</p>
      </main>
    </>
  );
}
