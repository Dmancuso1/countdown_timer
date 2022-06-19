import React from 'react'
import { SelectItem } from './SelectItem'
import { SelectCategory } from './SelectCategory'

export const SelectTool = () => {
  return (
    <section style={{ display: 'none', padding: '4rem' }}>
      <SelectCategory />
      <SelectItem />
    </section>
  )
}
