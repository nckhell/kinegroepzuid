import { getCurrentYear } from '../../utils/date'

export const Footer = () => {
  return (
    <footer className="text-sm leading-6 mt-12">
      <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright © {getCurrentYear()} Awell Health</p>
        </div>
        <a
          className="hover:text-slate-900 dark:hover:text-slate-400"
          href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/max-width.mdx"
        >
          Edit this page on GitHub
        </a>
      </div>
    </footer>
  )
}
