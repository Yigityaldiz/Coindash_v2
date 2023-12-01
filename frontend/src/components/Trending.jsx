
import React from 'react'
import useAxios from '../hooks/useAxios'

export default function Trending() {
    
    const { response } = useAxios('search/trending')
    console.log(response);
  return (
    <div>Trending</div>
  )
}
