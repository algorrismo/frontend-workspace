// "use client";

import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold text-center mb-10">
        NextAuth Login
      </h1>
      <Suspense fallback={<p>Loading session...</p>}>
        <SessionContent />
      </Suspense>
    </main>
  );
}

async function SessionContent() {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <div>
          <p>Welcome, {session.user.name}</p>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit">
              Logout
            </button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("github", {
              redirectTo: "/dashboard",
            });
          }}
        >
          <button type="submit">
            Login with GitHub
          </button>
        </form>
      )}
    </>
  );
}
