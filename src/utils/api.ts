import { News } from "@/pages";
import axios from "axios";

const { NEXT_PUBLIC_NEWS_API_KEY } = process.env;

export async function getNews(country: string): Promise<News> {
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEXT_PUBLIC_NEWS_API_KEY}`;
  const { data } = await axios.get<News>(url);

  return data;
}