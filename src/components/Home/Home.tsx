import Link from 'next/link'

import { team } from '../../../content/team'

export const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
      <h1
        id="home"
        className="scroll-mt-96 mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
      >
        <span className="relative whitespace-nowrap text-fuchsia-800">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-fuchsia-200/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Kine Groep Zuid</span>
        </span>{' '}
        is een groepspraktijk in Antwerpen
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl tracking-tight text-slate-700">
        Wij zijn een groepspraktijk van paramedici met als hoofdactiviteit
        kinesitherapie & manuele therapie, aangevuld met diëtiek,
        tabakologie, podologie en personal training.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link href="https://www.instagram.com/kinegroepzuid/">
          <a
            className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="800"
              width="1200"
              viewBox="-19.5036 -32.49725 169.0312 194.9835"
              className="h-5 w-5 flex-none fill-blue-600 group-active:fill-current"
            >
              <defs>
                <radialGradient
                  fy="578.088"
                  fx="158.429"
                  gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)"
                  gradientUnits="userSpaceOnUse"
                  xlinkHref="#a"
                  r="65"
                  cy="578.088"
                  cx="158.429"
                  id="c"
                />
                <radialGradient
                  fy="473.455"
                  fx="147.694"
                  gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)"
                  gradientUnits="userSpaceOnUse"
                  xlinkHref="#b"
                  r="65"
                  cy="473.455"
                  cx="147.694"
                  id="d"
                />
                <linearGradient id="b">
                  <stop stopColor="#3771c8" offset="0" />
                  <stop offset=".128" stopColor="#3771c8" />
                  <stop stopOpacity="0" stopColor="#60f" offset="1" />
                </linearGradient>
                <linearGradient id="a">
                  <stop stopColor="#fd5" offset="0" />
                  <stop stopColor="#fd5" offset=".1" />
                  <stop stopColor="#ff543e" offset=".5" />
                  <stop stopColor="#c837ab" offset="1" />
                </linearGradient>
              </defs>
              <path
                d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                fill="url(#c)"
              />
              <path
                d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                fill="url(#d)"
              />
              <path
                d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                fill="#fff"
              />
            </svg>
            <span className="ml-2">Volg ons op Instagram</span>
          </a>
        </Link>
      </div>
      <div className="mt-16 md:mt-20">
        <p className="font-semibold text-xl text-slate-900">
          U kan volgende therapeuten vinden in onze praktijk
        </p>
        <div className="flex justify-center mt-6">
          <ul
            role="list"
            className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6"
          >
            {team.slice(0, 4).map((teamMember) => (
              <li
                className="text-base sm:text-lg sm:text-xl"
                key={teamMember.firstName}
              >
                {teamMember.firstName} {teamMember.lastName}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-4">
          <ul
            role="list"
            className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6"
          >
            {team.slice(4).map((teamMember) => (
              <li
                className="text-base sm:text-lg sm:text-xl"
                key={teamMember.firstName}
              >
                {teamMember.firstName} {teamMember.lastName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
