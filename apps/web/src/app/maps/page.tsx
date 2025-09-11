interface MapsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function MapsPage({ searchParams }: MapsPageProps) {
  const query = searchParams.query ? String(searchParams.query) : '';
  const src = `/api/headstart${query ? `?query=${encodeURIComponent(query)}` : ''}`;

  return (
    <iframe
      src={src}
      title="Knowledge Maps"
      className="w-full h-screen border-0"
    />
  );
}
