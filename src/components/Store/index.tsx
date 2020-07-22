import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.scss'

interface StoreData {
  name: string
  description: string
  cost: number
  quantity: number
}

interface StoreProps {
  familyID: number
  storeID: number
}

interface ServerResponse {
  data: StoreData[]
}

export default function Store(props: StoreProps) {
  const { familyID, storeID } = props
  const [storeData, setStoreData] = useState<StoreData[]>([])
  const endpoint = `/${familyID}/stores/${storeID}`
  useEffect(() => {
    axios.get(endpoint)
    .then((response) => {
      setStoreData(response.data)
    })
  }, [])

  return (
    <div>
      <p>Welcome to my store!</p>
      <h1>Here are my items!</h1>
      {storeData.map((item: StoreData) => (
        <p>{`${item.name} -- ${item.description} -- ${item.cost} -- ${item.quantity}`}</p>
      ))}
    </div>
  )
}