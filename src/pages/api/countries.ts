import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/europe"
    );
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch data from external API" });
  }
}
