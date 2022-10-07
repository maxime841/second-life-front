import { Btn } from '@atoms/btns/btn'
import { ErrorText } from '@atoms/errors/error-text'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function FormResetPassword() {
  const { error, loadingResetPassword } = Store.user.useResetPassword()
  const { token } = useParams()
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valuePasswordConfirme, setValuePasswordConfirme] = useState('')

  const handlerResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    Store.user.activateResetPasswordLoadding()
    await Store.user.resetPassword({
      password: valuePassword,
      password_confirmation: valuePasswordConfirme,
      email: valueEmail,
      token,
    })
    Store.user.disabledResetPasswordLoadding()
  }

  return (
    <form onSubmit={handlerResetPassword}>
      {/* input email */}
      <InputFull
        placeholder='Veuillez renseigner votre adresse e-mail'
        value={valueEmail}
        setValueInput={setValueEmail}
        addClass='mb-3'
        type='email'
        activeReset
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Nouveau mot de passe'
        value={valuePassword}
        setValueInput={setValuePassword}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* input password_confirmation */}
      <InputFull
        placeholder='Confirmer le nouveau mot de passe'
        value={valuePasswordConfirme}
        setValueInput={setValuePasswordConfirme}
        addClass='mb-3'
        type='password'
        eye
        required
      />

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <Btn submit>Modifier</Btn>
      </div>
    </form>
  )
}
