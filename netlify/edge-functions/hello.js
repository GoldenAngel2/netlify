export default async (request, context) => {
  const id = new URL(request.url).searchParams.get("id");
  if (!id || typeof id !== "string") {
    return Response.json({ status: false, message: `You didn't provide the 'id' query.` });
  }
  const res = await fetch(`https://haste.discordcatto.repl.co/documents/${id}`, {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await res.json();
  return Response.json(jsonData);
};
