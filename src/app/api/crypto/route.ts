export async function GET() {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd");
  const data = await res.json();
  return Response.json(data);
}
