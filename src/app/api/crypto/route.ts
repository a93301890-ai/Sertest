export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      {
        next: { revalidate: 0 },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Upstream error" }), {
        status: res.status,
        headers: { "content-type": "application/json" },
      });
    }

    const data = await res.json();
    return Response.json(data); // ← вот это важно
  } catch (e) {
    return Response.json({ error: "Fetch failed" }, { status: 500 });
  }
}
