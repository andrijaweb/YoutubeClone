import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "afe5535d8amsh3d67cfc5228c3cep161f41jsne602e6091ca5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function apiVideos(url) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    if (!data) throw new Error("Error while fetching data");

    return data;
  } catch (err) {
    console.log(err.message);
  }
}
