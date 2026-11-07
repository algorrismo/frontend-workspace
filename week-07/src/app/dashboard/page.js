
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <Suspense fallback={<p className="p-10">Loading dashboard...</p>}>
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p>Welcome, {session.user.name}</p>
      <p>Email: {session.user.email}</p>

      <p>You are successfully logged in!</p>
    </main>
  );
}
