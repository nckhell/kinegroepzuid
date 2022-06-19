import { ButtonColorType, ButtonSizeType, ButtonType } from './button.types'
import {
  buttonColors,
  buttonSizes,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_SIZE,
} from './buttonStyles'

interface ButtonProps {
  label: string
  color?: ButtonColorType
  size?: ButtonSizeType
  disabled?: boolean
  type?: ButtonType
  onClick: () => void
}

export const Button = ({
  label,
  color = DEFAULT_BUTTON_COLOR,
  size = DEFAULT_BUTTON_SIZE,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn-base ${buttonSizes[size]} ${buttonColors[color]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  )
}
