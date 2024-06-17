import { ComponentProps, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as: T
  children: ReactNode
  disabled?: boolean
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', fullWidth, variant = 'primary', ...rest } = props

  const classNames = {
    button: clsx(s[variant], fullWidth && s.fullWidth),
  }

  return <Component className={classNames.button} {...rest} />
}
