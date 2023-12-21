export default async (request, context) => {
  const url = new URL(request.url);
  const uri = url.searchParams.get("url");
  if (!uri) {
    return Response.json({ status: false, message: `You failed to provide a url.` });
  };
  const res = await fetch(decodeURIComponent(uri), {
    method: request.method,
    body: request.body,
    headers: request.headers,
  }).catch(e => e);
  console.log(res, await res.text());
  if (res.status !== 200) {
    return Response.json({ status: false, message: `No response from the API` });
  }
  return Response.json(await res.json());
};
