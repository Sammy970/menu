import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();

  const response = await fetch("https://menu-dash.vercel.app/api/order", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const result = await response.json();
  console.log(result);

  return NextResponse.json({ message: "Successfull" }, { status: 200 });
}
