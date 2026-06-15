'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not reach backend'));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">PartyNest</h1>
      <p className="mt-4 text-lg">{message}</p>
    </main>
  );
}