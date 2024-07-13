import Card from '@/components/Card'
import Link from 'next/link'

export default function DefaultMessages() {
  return (
    <Card>
      <div>
        <h2>Messages Page</h2>
        <Link href="/dashboard/archive" className="text-blue-700 block">
          Archived Messages
        </Link>
        <Link href="/dashboard/new" className="text-blue-700 block">
          New Messages
        </Link>
      </div>
    </Card>
  )
}
