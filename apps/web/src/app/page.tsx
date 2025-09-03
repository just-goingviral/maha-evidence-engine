import siteConfig from "@/../branding/site.json";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: "https://maha-evidence-engine.vercel.app", // Replace with actual production URL
    potentialAction: {
      "@type": "SearchAction",
      target: "https://maha-evidence-engine.vercel.app/maps?query={search_term_string}", // Replace with actual production URL
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MAHA Evidence Engine</h1>
          <p className="text-xl mb-8">Mapping the Science of Natural Healing</p>
          <div className="flex gap-4 justify-center">
            <a
              href="/maps"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Explore Knowledge Maps
            </a>
            <a
              href="/atlas"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Evidence Atlas
            </a>
          </div>
        </div>
      </section>

      {/* Demo Queries Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Research Topics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Curcumin & Cancer</h3>
              <p className="text-gray-600 mb-4">
                Explore evidence on curcumin&#39;s potential anti-cancer properties and mechanisms.
              </p>
            <a href="/maps?query=curcumin+cancer" className="text-accent hover:underline">
              View Research →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Berberine & Diabetes</h3>
              <p className="text-gray-600 mb-4">
                Discover studies on berberine&#39;s effects on blood sugar and metabolic health.
              </p>
            <a href="/maps?query=berberine+diabetes" className="text-accent hover:underline">
              View Research →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">HBOT & Wound Healing</h3>
            <p className="text-gray-600 mb-4">
              Examine evidence for hyperbaric oxygen therapy in chronic wound management.
            </p>
            <a href="/maps?query=hyperbaric+oxygen+wound+healing" className="text-accent hover:underline">
              View Research →
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Knowledge Maps</h3>
              <p className="text-gray-600 mb-4">
                Visual exploration of scientific literature with interactive knowledge maps. 
                Navigate research landscapes and discover connections between studies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Interactive visualization</li>
                <li>• Evidence clustering</li>
                <li>• Citation networks</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Evidence Atlas</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive heatmaps showing intervention effectiveness across different outcomes. 
                Quickly identify promising research areas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Intervention × Outcome matrix</li>
                <li>• Evidence strength indicators</li>
                <li>• Research gap identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 MAHA Evidence Engine. All rights reserved.</p>
          <p className="text-gray-400">Empowering evidence-based natural healing research</p>
        </div>
      </footer>
    </main>
  );
}
