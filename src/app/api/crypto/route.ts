// src/app/api/crypto/route.ts
export const revalidate = 0; // всегда свежие данные

export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd&include_24hr_change=true",
      { next: { revalidate: 0 }, headers: { accept: "application/json" } }
    );

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Upstream error" }), {
        status: res.status,
        headers: { "content-type": "application/json" },
      });
    }

    const data = await res.json();
    return Response.json(data, { status: 200 });
  } catch (e) {
    return Response.json({ error: "Fetch failed" }, { status: 500 });
  }
}
