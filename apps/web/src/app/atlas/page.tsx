interface AtlasPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function AtlasPage({ searchParams }: AtlasPageProps) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === 'string') {
      params.append(key, value);
    }
  });
  const src = `/api/eviatlas${params.toString() ? `?${params.toString()}` : ''}`;

  return (
    <iframe
      src={src}
      title="Evidence Atlas"
      className="w-full h-screen border-0"
    />
  );
}
