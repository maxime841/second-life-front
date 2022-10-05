import React from 'react'
import { TIcons } from '@types-app/icon.type'

/**
 * user
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
export function UserIcon({ color, size }: TIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={`${size} ${color ?? 'w-6 h-6'}`}>
      <path
        fillRule='evenodd'
        d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
        clipRule='evenodd'
      />
    </svg>
  )
}
