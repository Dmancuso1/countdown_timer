import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import allLists from '../data/db/items'
import getOptionsFromCategory from '../helpers/getOptionsFromCategory'

export const SelectItem = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    console.log('selected item: ', selectedItem)
  }, [selectedItem])

  // format select info for react-select
  let options = []
  //TODO: change 'car' to use the state from SelectCategory. use REDUX MAN!
  getOptionsFromCategory(allLists, 'shape').map((item) => {
    return options.push({
      value: `${item.title}`,
      label: `${item.title}`,
      category: `${item.category}`,
    })
  })

  return (
    <div style={{ paddingBottom: '2rem',margin:'0', }}>
      <h3 style={{ color: '#e6e6e6' }}>
        Items: <strong>{selectedItem ? selectedItem.category : ''}</strong>
      </h3>
      <Select
        defaultValue={selectedItem}
        onChange={setSelectedItem}
        options={options}
        style={{ backgroundColor: 'blue',margin:'0' }}
      />
    </div>
  )
}
