export default async (request, context) => {
  const url = new URL(request.url).searchParams.get("url");
  if (!url || typeof url !== "string") {
    return Response.json({ status: false, message: `You didn't provide the 'url' query.` });
  }
  const res = await fetch(url, {
    method: request.method,
    body: request.body,
    headers: request.headers
  }).catch((err) =>  {
    console.log(err);
    return {
    status: 404,
    text: () => `{"status": false, "message": "Unable to fetch that."}`,
  }});
  const text = await res.text();
  console.log(text);
  return Response.json({ status: true, text });
};
