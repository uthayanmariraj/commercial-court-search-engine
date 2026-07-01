"use client";

import { useEffect, useState } from "react";
import { healthCheck } from "@/lib/api";

export default function Home() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await healthCheck()
        if (response.ok) {
          const data = await response.json()
          setStatus(data.status)
        } else {
          setStatus(`Error (${response.status})`)
        }
      } catch (error) {
        setStatus("Offline")
      }
    }
    checkHealth()
  }, [])

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Commercial Court Search
      </h1>

      <p>Backend Status: {status}</p>
    </main>
  );
}