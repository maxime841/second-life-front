import React from 'react'
import { Store } from '@store/store'
import Btn from '@atoms/btns/btn-icon'
import { TBtnMenuBurger } from '@types-app/btn.type'
import MenuBurgerIcon from '@atoms/icons/burger-icon'
import LinkText from '@atoms/links/link-text'
import LinkBtn from '@atoms/links/link-btn'
import HomeIcon from '@atoms/icons/home-icon'
import MenuDropdownLand from '@molecules/menu-dropdown-land/menu-dropdown-land'
import ClubIcon from '@atoms/icons/club-icon'

/**
 * btn dark mode with change icon moon or sun
 * @returns
 */
function BtnIconMenuBurger ({ children, addClass }: TBtnMenuBurger) {
  const menuBurger = Store.menuBurger.useBurgerMenu()

  return (
    <div className={`display sm:flex md:invisible ${addClass}`}>
      {/* btn dropdown */}
      <Btn click={() => Store.menuBurger.toggleStateMenuBurger(menuBurger)}>
        <span className='mr-2'>{children}</span>
        <MenuBurgerIcon size='w-4 h-4' />
      </Btn>

      {/* menu burger */}
      {
        menuBurger
          ? (
            <ul className='flex-col items-center justify-around display sm:flex md:invisible'>
              {/* link home */}
              <li>
                <LinkBtn link='/'>
                  <HomeIcon size='w-5 h-5' />
                  <span className='ml-2'>Home</span>
                </LinkBtn>
              </li>

              {/* dropdown land */}
              <MenuDropdownLand addClass='mr-2 ml-2'>
                Terrains
              </MenuDropdownLand>

              {/* link club */}
              <li>
                <LinkBtn link='/club'>
                  <ClubIcon size='w-5 h-5' />
                  <span className='ml-2'>Club</span>
                </LinkBtn>
              </li>
            </ul>
          )
          : null
      }
    </div>
  )
}

export default BtnIconMenuBurger
