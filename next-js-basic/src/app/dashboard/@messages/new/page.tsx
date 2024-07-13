import Card from '@/components/Card'
import Link from 'next/link'

export default function NewMessages() {
  return (
    <Card>
      <div>
        <h2>New Messages</h2>
        <Link href="/dashboard" className="text-blue-700 block">
          Show all Messages
        </Link>
        <Link href="/dashboard/archive" className="text-blue-700 block">
          Archived Messages
        </Link>
      </div>
    </Card>
  )
}
