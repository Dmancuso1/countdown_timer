import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import allCategories from '../data/db/categories'
import firstLetterCapital from '../helpers/firstLetterCapital'

export const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    console.log('selected category: ', selectedCategory)
  }, [selectedCategory])

  // format select info for react-select
  let options = []
  allCategories.map((item) => {
    return options.push({
      value: `${item.title}`,
      label: `${firstLetterCapital(item.title)}`,
    })
  })

  // console.log('options', options)

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <h3 style={{ color: '#e6e6e6' }}>
        Categories:{' '}
        <strong>{selectedCategory ? selectedCategory.value : ''}</strong>
      </h3>
      <Select
        defaultValue={selectedCategory}
        onChange={setSelectedCategory}
        options={options}
      />
    </div>
  )
}
