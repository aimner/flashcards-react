import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

const loginSchema = z.object({
  confirmPassword: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
})

type FormValues = z.infer<typeof loginSchema>

export const SignUp = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {}

  console.log(errors)

  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>Sign Up</Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input label={'email'} {...register('email')} error={errors.email?.message} />
        <Input
          error={errors.password?.message}
          label={'password'}
          type={'password'}
          {...register('password')}
        />
        <Input
          error={errors.confirmPassword?.message}
          id={'confirmPassword'}
          label={'confirm password'}
          type={'password'}
          {...register('confirmPassword')}
        />
        <Button as={'button'} type={'submit'}>
          Sign Up
        </Button>
        <Typography as={Link} to={'/login'} variant={'link1'}>
          Sign In
        </Typography>
      </form>
    </Card>
  )
}
