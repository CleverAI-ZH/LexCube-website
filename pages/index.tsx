import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Optional: Google Tag Manager Initialisierung
    // Hier GTM-ID einfügen, wenn vorhanden
  }, []);

  return (
    <>
      <Head>
        <title>LexCube – Die autarke KI für Kanzleien</title>
        <meta name="description" content="LexCube ist Ihre datenschutzkonforme Schweizer KI-Box für juristische Arbeit ohne Cloud." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans bg-gradient-to-b from-white to-blue-50 text-gray-900 min-h-screen">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <Image src="/logo-lexcube.svg" alt="LexCube Logo" width={180} height={180} className="mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">LexCube</h1>
          <p className="text-xl md:text-2xl max-w-xl mb-6">
            Die autarke KI für Schweizer Kanzleien – 100 % lokal. 0 % Cloud.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-300 shadow-md">Demo vereinbaren</button>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-10">Ihre Vorteile mit LexCube</h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Lokale Verarbeitung</h3>
                <p>Keine Cloud, keine externen Abfragen. Volle Kontrolle über Ihre Daten.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Juristisch fundierte Antworten</h3>
                <p>Dank RAG mit Zugriff auf echte Gesetzestexte und Kanzlei-Dokumente.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Verschlüsselte Datenhaltung</h3>
                <p>AES-256 Verschlüsselung, tägliche Backups, rollenbasierter Zugriff.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Sofort einsatzbereit</h3>
                <p>Turn-Key Lösung mit NVIDIA Jetson Box. Integrierbar in jede Kanzlei.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-blue-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Preismodell</h2>
            <p className="mb-4">Klares Lizenzmodell für Schweizer Anwaltskanzleien</p>
            <ul className="text-left list-disc list-inside max-w-md mx-auto text-lg">
              <li>CHF 850.– / Monat für 1 Anwalt</li>
              <li>+ CHF 250.– je zusätzlicher Anwalt</li>
              <li>+ CHF 150.– pro zusätzlichem KI-Agent</li>
            </ul>
          </div>
        </section>

        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-4">Bereit für Ihre Demo?</h2>
          <p className="mb-6">Kontaktieren Sie uns für eine persönliche Vorführung von LexCube.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-300 shadow-md">Jetzt Demo anfragen</button>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500">
          © 2025 CleverAI GmbH – Stephan Stoeber
        </footer>
      </main>
    </>
  );
}
