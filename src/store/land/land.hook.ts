import { ILand } from '@types-app/land.type'
import { useEffect, useState } from 'react'
import { LandService } from './land.service'
import { LandStore } from './land.store'

export const LandHook = {
  /**
   * hook for observable land$
   */
  useLands: () => {
    const [lands, setLands] = useState<ILand[]>([])

    useEffect(() => {
      async function getLands() {
        await LandService.getAllLands()
      }
      LandStore.lands$.subscribe(value => setLands(value))

      getLands()
    }, [])

    return lands
  },
  /**
   * hook for observable landSelected$
   * @param id: string
   */
  useLand: (id: string) => {
    const [land, setLand] = useState<ILand>({})

    useEffect(() => {
      // execute call
      async function getLand() {
        await LandService.getLand(id)
      }

      // afect observable
      LandStore.landSelected$.subscribe(value => setLand(value))

      getLand()
    }, [id])

    // return variable hook
    return land
  }
}
