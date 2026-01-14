
export default function TestPaymentPage() {
  const searchParams = new URLSearchParams(globalThis.location.search);
  const product = searchParams.get("product") || "Product";
  const amount = searchParams.get("amount") || "-";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Test Payment</h1>
        <div className="mb-4">
          <span className="font-semibold">Product:</span> <span className="text-lg text-slate-800 font-bold">{product}</span>
        </div>
        <div className="mb-6">
          <span className="font-semibold">Amount:</span> <span className="text-lg text-blue-600 font-bold">{amount}</span>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded">Simulate Payment</button>
      </div>
    </div>
  );
}
