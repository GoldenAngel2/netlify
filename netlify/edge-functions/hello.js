export default async (request, context) => {
  const url = new URL(request.url).searchParams.get("url");
  if (!url || typeof url !== "string") {
    return Response.json({ status: false, message: `You didn't provide the 'url' query.` });
  }
  const res = await fetch(url, {
    method: res.method,
    body: res.body,
    headers: res.headers
  });
  const text = await res.text();
  return Response.json({ status: true, text });
};
