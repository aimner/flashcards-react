import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radioGroup.module.scss'

type RadioItemType = {
  id: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

type RadioGroupProps = {
  items: RadioItemType[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = (props: RadioGroupProps) => {
  const { disabled, items, ...restProps } = props

  const classnames = {
    disable: clsx(s.RadioGroupBlock, disabled && s.disable),
  }

  const radioList = items.map(({ id, value, ...restProps }) => (
    <div className={classnames.disable} key={id} style={{ alignItems: 'center', display: 'flex' }}>
      <RadioGroupRadix.Item className={s.RadioGroupItem} id={id} value={value} {...restProps}>
        <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
      </RadioGroupRadix.Item>
      <label className={s.Label} htmlFor={id}>
        {value}
      </label>
    </div>
  ))

  return (
    <div>
      <RadioGroupRadix.Root className={s.RadioGroupRoot} disabled={disabled} {...restProps}>
        {radioList}
      </RadioGroupRadix.Root>
    </div>
  )
}
