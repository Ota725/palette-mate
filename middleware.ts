import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function middleware(request: NextRequest) {
  // サーバーサイドクライアントを作成
  const supabase = await createClient();

  // 認証が必要なパス
  const protectedPaths = ["/favorites"];

  const requiresAuth = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (requiresAuth) {
    // サーバーサイドでユーザー情報を取得
    const { data: user } = await supabase.auth.getUser();

    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/login"; // ログインページにリダイレクト
      return NextResponse.redirect(url);
    }
  }

  // 現在のURLを取得
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  // 通常のレスポンスを返す
  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
