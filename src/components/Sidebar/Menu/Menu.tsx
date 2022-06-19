import { nav } from '../../../config/nav'

export const Menu = () => {
  return (
    <ul>
      {nav.map((navItem, index) => (
        <li className="mt-12 lg:mt-8" key={index}>
          <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900">
            {navItem.label}
          </h5>
        </li>
      ))}
    </ul>
  )
}
