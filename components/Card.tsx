import Link from 'next/link'
import React from 'react'

function Card({ path, title, }: { path: string, title: string }) {
    return (
        <Link href={path} className='shadow-lg h-80 w-80 bg-neutral-700 rounded-xl hover:opacity-80 transition flex items-center justify-center text-center text-4xl p-4 font-light font-sans text-neutral-200'>
            {title}
        </Link>
    )
}

export default Card
