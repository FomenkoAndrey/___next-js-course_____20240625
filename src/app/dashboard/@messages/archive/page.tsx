import Card from '@/components/Card'
import Link from 'next/link'

export default function ArchiveMessages() {
  return (
    <Card>
      <div>
        <h2>Archive Messages</h2>
        <Link href="/dashboard" className="text-blue-700 block">
          Show all Messages
        </Link>
        <Link href="/dashboard/new" className="text-blue-700 block">
          New Messages
        </Link>
      </div>
    </Card>
  )
}
