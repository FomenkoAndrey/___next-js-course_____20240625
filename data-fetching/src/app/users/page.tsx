import { UserInterface } from '@/types/User.interface'

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: UserInterface[] = await response.json()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600 max-w-500"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm">{user.username}</p>
          </div>
          <div className="flex flex-col space-y-4 items-end">
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
