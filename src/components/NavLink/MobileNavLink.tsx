import { Popover } from '@headlessui/react'
import Link from 'next/link'

interface MobileNavLinkProps {
  href: string
  label: string
}

export const MobileNavLink = ({ href, label }: MobileNavLinkProps) => {
  return (
    <Popover.Button as={Link} href={href}>
      <a title={label} className="block w-full p-2">
        {label}
      </a>
    </Popover.Button>
  )
}
