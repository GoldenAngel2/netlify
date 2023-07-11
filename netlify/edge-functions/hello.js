export default async (request, context) => {
  const res = await fetch(`https://haste.discordcatto.repl.co/documents/${new URL(request.url).searchParams.get("id")}`, {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await res.json();
  return Response.json(jsonData);
};
