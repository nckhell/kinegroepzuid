import { Popover } from '@headlessui/react'
import Link from 'next/link'

interface MobileNavLinkProps {
  href: string
  label: string
  onClick: () => void
}

export const MobileNavLink = ({ href, label, onClick }: MobileNavLinkProps) => {
  return (
    <Popover.Button as={Link} href={href}>
      <a title={label} className="block w-full p-2" onClick={onClick}>
        {label}
      </a>
    </Popover.Button>
  )
}
