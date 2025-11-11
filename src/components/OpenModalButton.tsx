import { Link } from 'expo-router'
import React from 'react'
import { Button } from './Button'

export default function OpenModalButton() {
  return (
    <Link asChild push href="/modal">
      <Button title="Open Modal" />
    </Link>
  )
}
