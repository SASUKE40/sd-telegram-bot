import http from "node:http";
const TXT2IMG_URL = "http://127.0.0.1:7860/sdapi/v1/txt2img";
export async function txt2img(data: AnythingV4) {
  const res = await fetch(TXT2IMG_URL, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return res;
}
