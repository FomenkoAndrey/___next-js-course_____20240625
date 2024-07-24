import { ReactNode } from 'react'

const Loading = ({ children }: { children: ReactNode }) => {
  return <div className="text-2xl text-gray-600 mb-6">{children}</div>
}

export default Loading
