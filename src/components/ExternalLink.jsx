import React from 'react'

export default function ExternalLink({ children, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='transition hover:brightness-125'>
      {children}
    </a>
  )
}