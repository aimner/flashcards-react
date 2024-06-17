import { ComponentProps } from 'react'

import logo from '@/assets/imgs/Logo.png'
import avatar from '@/assets/imgs/avatar.jpg'
import clsx from 'clsx'

import s from './header.module.scss'

import { Button } from '../button/button'

type HeaderType = {
  isAuth: boolean
} & ComponentProps<'header'>

export const Header = (props: HeaderType) => {
  const { isAuth, ...restProps } = props
  const classnames = {
    avatarBlock: clsx(s.headerAvatarBlock),
    block: clsx(s.headerBlock),
    header: clsx(s.header),
  }

  return (
    <header {...restProps} className={classnames.header}>
      <div className={classnames.block}>
        <img alt={'logo'} src={logo} />
        {isAuth ? (
          <div className={classnames.avatarBlock}>
            <span>Egor Vasilkov</span>
            <img alt={'avatar'} src={avatar} />
          </div>
        ) : (
          <Button as={'button'} variant={'secondary'}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}
