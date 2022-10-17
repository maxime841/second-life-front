import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import React, { useState } from 'react'
import { TvoletDetailUser } from './volet-profil-delete.type'

export function VoletDetailProfilDelete({ userCurrent }: TvoletDetailUser) {
  const [openMoreProfilDelete, setOpenMoreProfilDelete] = useState(false)

  const handlerClickOpenDetailProfilDelete = () => {
    setOpenMoreProfilDelete(!openMoreProfilDelete)
  }

  return (
    <section className='py-8'>
        <Btn addClass='mx-4' click={handlerClickOpenDetailProfilDelete}>
          {openMoreProfilDelete ? 'Fermer' : 'Supprimer le profil'}
        </Btn>
        {/* detail profil update */}
      {openMoreProfilDelete ? (
        <div className='px-2 border-2 border-black w-fit p-6 mt-6 mx-2 rounded-lg'>
          {/* modification profil */}
          <div>
            <TitleState>Supprimer le profil</TitleState>
            <LabelPrimary>Suppresion du profil ?: </LabelPrimary>
            <Btn>Confirmer</Btn>
          </div>
        </div>
      )
      : null}
    </section>
  )
}
