import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMenuCard from '../../hooks/useMenuCard';

const ItemPage = () => {
    const [items, setItems] = useState()
    const {category, id} = useParams();
    const menu = useMenuCard()
  return (
    <div>ItemPage</div>
  )
}

export default ItemPage