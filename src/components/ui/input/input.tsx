import { ComponentProps, forwardRef, useState } from 'react'

import ClosedEye from '@/assets/icons/components/ClosedEye'
import OpenEye from '@/assets/icons/components/OpenEye'
import Search from '@/assets/icons/components/Search'
import clsx from 'clsx'

import s from './input.module.scss'

import { Typography } from '../typography'

type InputType = {
  error?: string
  label?: string
  type?: 'password' | 'search' | 'text'
} & ComponentProps<'input'>

export const Input = forwardRef<
  HTMLInputElement,
  InputType & Omit<ComponentProps<'input'>, keyof InputType>
>((props, ref) => {
  const { disabled, error, label, name, type = 'text', ...restProps } = props

  const [showPassword, setShowPassword] = useState(false)

  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password'
    } else {
      return type
    }
  }

  const onShowPassword = () => {
    disabled || setShowPassword(v => !v)
  }

  const classNames = {
    error: s.textError,
    input: clsx(s[type], error && s.inputError),
    inputBlock: s.inputBlock,
    label: clsx(s.label, disabled && s.disabledLabel),
    passwordIcon: clsx(s.icon, s.passwordIcon, disabled && s.disabledIcon),
    searchIcon: clsx(s.icon, s.searchIcon, disabled && s.disabledIcon),
    wrapper: s.wrapper,
  }

  return (
    <div className={classNames.wrapper}>
      {label && (
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={classNames.inputBlock}>
        {type === 'search' && (
          <div className={classNames.searchIcon}>
            <Search size={18} />
          </div>
        )}
        <input
          className={classNames.input}
          disabled={disabled}
          ref={ref}
          type={getInputType()}
          {...restProps}
        />
        {type === 'password' && (
          <div className={classNames.passwordIcon} onClick={onShowPassword}>
            {showPassword ? <ClosedEye size={18} /> : <OpenEye size={18} />}
          </div>
        )}
      </div>
      {error && <span className={classNames.error}>{error}</span>}
    </div>
  )
})
