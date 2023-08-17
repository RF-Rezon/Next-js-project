import Post from "@/app/models/Post";
import connection from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connection();
  const url = new URL(request.url);
  const userName = url.searchParams.get("username");
  try {
    const posts = await Post.find(userName && { userName });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database connection error!", { status: 500 });
  }
};

export const POST = async (request) => {
  await connection();
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
