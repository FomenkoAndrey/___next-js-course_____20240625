export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json({ date: new Date().toLocaleString() }, { headers: { 'Content-Type': 'application/json' } })
}
