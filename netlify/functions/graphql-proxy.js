import fetch from "node-fetch";

export async function handler(event) {
  try {
    const response = await fetch("http://3.67.196.100/graphql", {
      method: "POST",
      body: event.body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching data" }),
    };
  }
}
