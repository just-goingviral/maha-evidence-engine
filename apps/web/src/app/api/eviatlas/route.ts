import { NextRequest } from 'next/server';
import redis from '@/utils/redis';

const EVIATLAS_URL = process.env.EVIATLAS_URL || 'http://localhost:3838';
const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const cacheKey = `eviatlas:${query}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'text/html' } });
  }

  const upstream = `${EVIATLAS_URL}${query ? `?${query}` : ''}`;
  const resp = await fetch(upstream);
  const body = await resp.text();
  await redis.set(cacheKey, body, 'EX', CACHE_TTL);
  return new Response(body, { headers: { 'Content-Type': 'text/html' } });
}
