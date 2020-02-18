import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    image: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",
    
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    image: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",

  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
    image: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",

  },
]

const CardExampleGroupProps = () => <Card.Group items={items} />

export default CardExampleGroupProps
