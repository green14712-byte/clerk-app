import { DESTRUCTION } from 'dns'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello, Next.js',
    description: 'NEXT,js 예제',
  }
  return NextResponse.json(data)
}
