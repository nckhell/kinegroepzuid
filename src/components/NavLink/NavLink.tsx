import Link from 'next/link'

interface NavLinkProps {
  href: string
  label: string
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link href={href}>
      <a
        title={label}
        className='className="inline-block rounded-lg py-1 px-2 text-base text-slate-700 hover:bg-slate-100 hover:text-slate-900"'
      >
        {label}
      </a>
    </Link>
  )
}
