import { NextRequest } from 'next/server';
import redis from '@/utils/redis';
import { fetchEvidenceMaps } from '@/utils/evidenceMaps';

const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const cacheKey = `evidence-maps:${query}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const data = await fetchEvidenceMaps(query);
    const body = JSON.stringify(data);
    await redis.set(cacheKey, body, 'EX', CACHE_TTL);
    return new Response(body, { headers: { 'Content-Type': 'application/json' } });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
