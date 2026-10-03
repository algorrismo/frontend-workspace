import { createSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("students")
    .select("*");

  if (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }

  return Response.json({
    success: true,
    students: data,
  });
}