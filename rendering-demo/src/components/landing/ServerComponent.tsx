import * as fs from 'node:fs'

export default function ServerComponent() {
  fs.readFileSync('./src/components/landing/ServerComponent.tsx', 'utf8')
  console.log('ServerComponent - is a server component')
  return <h1 className="header3 ml-8 text-red-500">ServerComponent</h1>
}
