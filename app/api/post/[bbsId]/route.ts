import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {bbsId: string}} ){ //動的なファイルのidを取得するためにparamsを使用する
  const bbsId = params.bbsId //動的ファイルのidを元に取得してくる
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId) //型変換
    }
  });
  return NextResponse.json(bbsDetailData);
}
