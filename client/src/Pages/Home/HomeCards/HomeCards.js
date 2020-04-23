import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Project 1',
    description:
      'First ReactJS Portfolio',
    meta: 'ReactJS Using Ant Design',
    image: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",
    
  },
  {
    header: 'Day 1',
    description:
      'First day in the travels of person from place to place.',
    meta: 'meta information',
    image: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",

  },
  {
    header: 'Day 2',
    description:
      'Second day in the lifespan of a species.',
    meta: '2% of 100% in lifespan',
    image: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",

  },
]

const CardExampleGroupProps = () => <Card.Group items={items} />

export default CardExampleGroupProps
