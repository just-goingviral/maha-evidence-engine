interface MapsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function MapsPage({ searchParams }: MapsPageProps) {
  const query = searchParams.query ? String(searchParams.query) : '';
  const scope = searchParams.scope ? String(searchParams.scope) : '';
  const params = new URLSearchParams();
  if (query) params.set('query', query);
  if (scope) params.set('scope', scope);
  const src = `/api/headstart${params.toString() ? `?${params.toString()}` : ''}`;

  return (
    <iframe
      src={src}
      title="Knowledge Maps"
      className="w-full h-screen border-0"
    />
  );
}
