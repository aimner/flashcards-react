import { ComponentPropsWithoutRef } from 'react'

import s from './layout.module.scss'

import { Header } from '../ui/header'

type LayoutProps = ComponentPropsWithoutRef<'div'>

export const Layout = ({ children, ...restProps }: LayoutProps) => {
  return (
    <div {...restProps} className={s.layout}>
      <Header isAuth={false} />
      {children}
    </div>
  )
}
