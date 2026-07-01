'use client';


export async function healthCheck() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${API_URL}/health`)
    return res
}