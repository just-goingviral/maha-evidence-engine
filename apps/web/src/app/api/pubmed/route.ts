import { NextRequest } from 'next/server';
import redis from '@/utils/redis';
import { fetchPubMedArticles } from '@/utils/pubmed';

const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get('term') || '';
  const cacheKey = `pubmed:${searchParams.toString()}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const articles = await fetchPubMedArticles(term);
    const body = JSON.stringify(articles);
    await redis.set(cacheKey, body, 'EX', CACHE_TTL);
    return new Response(body, { headers: { 'Content-Type': 'application/json' } });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
