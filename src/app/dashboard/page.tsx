// Clerk(인증 라이브러리)에서 인증 상태와 현재 로그인된 사용자 정보를 불러옴
import { auth, currentUser } from '@clerk/nextjs/server'

// 리액트 관련 기본 import
import React from 'react'

// Next.js의 서버 컴포넌트에서 사용할 async 함수로 페이지 컴포넌트 선언
export default async function page() {
  // 로그인 상태(auth 상태)를 가져옴 (서버에서 실행됨)
  const { isAuthenticated } = await auth()

  // 로그인 안 된 상태라면 로그인 유도 메시지를 출력
  if (!isAuthenticated) {
    return <div>sign in to view this page 이페이지를 보려면 로그인하세요</div>
  }

  // 로그인된 사용자 정보(currentUser)를 Clerk에서 가져옴
  const user = await currentUser()

  // 로그인된 사용자에게 환영 메시지와 사용자 정보를 표시
  return (
    <div>
      {/* 대시보드 페이지 제목 */}
      <h1 className="text-2xl font-bold mb-5">Dashboard (Server-side)</h1>

      {/* 환영 메시지 */}
      <p>Welcome to Dashboard</p>

      {/* 페이지 설명: 개인정보를 표시하는 대시보드 */}
      <p>이페이지는 로그인된 사용자의 개인정보를 표시</p>

      {/* 사용자 이름 표시 (null-safe로 firstName, lastName 접근) */}
      <p>
        Welcome, {user?.firstName} {user?.lastName}
      </p>

      {/* 사용자 이메일 주소 출력 */}
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>

      {/* 사용자 가입 시간 출력 */}
      <p>사용자 등록시간: {user?.createdAt}</p>
    </div>
  )
}
