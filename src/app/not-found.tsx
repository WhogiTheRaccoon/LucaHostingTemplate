'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center bg-background pt-[16vh] header-bg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/404bg.png')"}}>
      <div className="text-center text-white">
        <Image src="/images/greeb/greebSad.webp" width={300} height={300} alt="404" className="mx-auto"/>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted mb-4">Oops! Greeb can't find the page your looking for</p>
        <button onClick={() => router.back()} className="text-accent hover:text-accent/50 underline text-xl">Go Back</button>
      </div>
    </div>
  );
};