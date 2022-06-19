import { ButtonColorType, ButtonSizeType } from './button.types'

export const DEFAULT_BUTTON_SIZE: ButtonSizeType = 'base'
export const DEFAULT_BUTTON_COLOR: ButtonColorType = 'slate'

export const buttonSizes: { [key in ButtonSizeType]: string } = {
  xs: 'py-2 px-3 text-xs',
  sm: 'py-2 px-3 text-sm',
  base: 'px-5 py-2.5 text-sm',
  lg: 'py-3 px-5 text-base',
  xl: 'px-6 py-3.5 text-base',
}

export const buttonColors: { [key in ButtonColorType]: string } = {
  slate:
    'text-white bg-slate-900 hover:bg-slate-700 focus:ring-offset-slate-50 focus:ring-slate-400',
  sky: 'text-white bg-sky-500 highlight-white/20 hover:bg-sky-400',
  indigo: 'text-white bg-indigo-600 highlight-white/20 hover:bg-indigo-500',
  violet: 'text-white bg-violet-600 highlight-white/20 hover:bg-violet-500',
  fuchsia: 'text-white bg-fuchsia-600 highlight-white/20 hover:bg-fuchsia-500',
  purple: 'text-white bg-purple-600 highlight-white/20 hover:bg-purple-500',
}
