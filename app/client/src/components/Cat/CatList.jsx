import Cat from "./Cat";
import React from 'react'
import Kitty1 from '../../assets/images/kitty-1.jpg';
import Kitty2 from '../../assets/images/kitty-2.jpg';
import Kitty3 from '../../assets/images/kitty-3.jpg';

const cats = [
  {id: 'c1', name: "Baby Hans", type: "Domestic Shorthair", img: Kitty1} ,
  {id: 'c2', name: "Baby Dusty", type: "Domestic Longhair", img: Kitty2} ,
  {id: 'c3', name: "Baby Heather", type: "Ragdoll", img: Kitty3} ,
  {id: 'c4', name: "Mikey", type: "Russian Blue", img: Kitty2} ,
]

const CatList = () => {
  return (
    <ul className="flex flex-col gap-8">
      {cats.map(cat => {
        return <li key={cat.id}><Cat name={cat.name} type={cat.type} img={cat.img} /></li>
      })}
    </ul>

  )
}

export default CatList