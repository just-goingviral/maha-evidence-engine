export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Medical Information Disclaimer</h1>
        <p className="text-gray-700 mb-4">
          The information provided on this site is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p className="text-gray-700 mb-4">
          Always seek the guidance of a qualified health provider with any questions you may have regarding your health or a medical condition. Never disregard professional medical advice or delay seeking it because of information you have read on this site.
        </p>
        <p className="text-gray-700">
          If you think you may be experiencing a medical emergency, call your doctor or emergency services immediately.
        </p>
      </div>
    </main>
  );
}
