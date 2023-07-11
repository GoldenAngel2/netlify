export default async (request, context) => {
  const res = await fetch("https://my.elara.services/site/ping", {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await res.json();
  return Response.json(jsonData);
};
