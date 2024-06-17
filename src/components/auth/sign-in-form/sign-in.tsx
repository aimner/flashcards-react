import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './sign-in.module.scss'

export const SignIn = () => {
  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>Sign In</Typography>
      <form className={s.form}>
        <Input id={'email'} label={'email'} type={'text'} />
        <Input id={'password'} label={'password'} type={'password'} />
        <Checkbox checked label={'Remeber me'} />
      </form>
      <Button as={'button'} type={'submit'}>
        Sign In
      </Button>
      <Typography as={Link} to={'/registration'} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
