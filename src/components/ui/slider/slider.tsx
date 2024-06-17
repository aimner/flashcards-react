import { ComponentPropsWithoutRef, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

type SliderProps = {} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = (props: SliderProps) => {
  const { defaultValue, onValueChange, ...restProps } = props

  const [sliderValues, setSliderValues] = useState(defaultValue || [])

  const classnames = {
    range: clsx(s.range),
    root: clsx(s.root),
    thumb: clsx(s.thumb),
    track: clsx(s.track),
    value: clsx(s.value),
    wrapper: clsx(s.wrapper),
  }

  const onChangeHandler = (data: number[]) => {
    onValueChange?.(data)
    setSliderValues(data)
  }

  return (
    <div className={classnames.wrapper}>
      <div className={classnames.value}>{sliderValues[0]}</div>
      <SliderRadix.Root
        {...restProps}
        className={classnames.root}
        defaultValue={defaultValue}
        onValueChange={onChangeHandler}
      >
        <SliderRadix.Track className={classnames.track}>
          <SliderRadix.Range className={classnames.range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={classnames.thumb} />
        <SliderRadix.Thumb aria-label={'Volume'} className={classnames.thumb} />
      </SliderRadix.Root>
      <div className={classnames.value}>{sliderValues[1]}</div>
    </div>
  )
}
