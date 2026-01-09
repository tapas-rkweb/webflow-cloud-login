export async function POST({ request }) {
  const { email, password } = await request.json();
  if (email === "admin@webflow.cloud" && password === "admin123") {
    return new Response(JSON.stringify({ success: true, message: "Login successful!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), {
    status: 401,
    headers: { "Content-Type": "application/json" }
  });
}
