import React, { useState } from 'react'
import { TInput } from '@types-app/input.type'
import Input from '@atoms/inputs/input'
import MagnifyingGlassIcon from '@atoms/icons/magnifying-glass-icon'

/**
 * SearchBar
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @returns
 */

function SearchBar ({
  children
}: TInput) {
  const [value, setValue] = useState('')

  return (
    <div className={`
    flex items-center
    rounded-lg
    bg-fond_claire
    relative
    `}
    >
      <div className='absolute pl-2'>
        <MagnifyingGlassIcon size='w-6 h-6' color='text-black' />
      </div>
      <Input
        value={value}
        padding='py-2 pl-10 pr-4'
        placeholder='Veuillez saisir votre recherche'
        setValueInput={setValue}
        // eslint-disable-next-line react/no-children-prop
        children={children}
      />
    </div>
  )
}

export default SearchBar
