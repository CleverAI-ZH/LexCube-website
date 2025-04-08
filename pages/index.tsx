import Image from "next/image";

export default function ComingSoon() {
  return (
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
  );
}
