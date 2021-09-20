import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { 
  Container,
  DropDownMenu,
} from './styles'

interface OrderByMenuProps {
  currentOrder?: 0 | 1 | 2 | 3 | 4;
  onOrderChange: (order: number) => void
}

const orderOptions = [
  {key: "order0", name: "Organizar por"},
  {key: "order1", name: "Novidades"},
  {key: "order2", name: "Preço: Maior - menor"},
  {key: "order3", name: "Preço: Menor - maior"},
  {key: "order4", name: "Mais vendidos"},
]

export function OrderByMenu({
  currentOrder = 0,
  onOrderChange
}: OrderByMenuProps) {

  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  function changeOrder(orderKey: number) {
    onOrderChange(orderKey)
    setIsDropDownOpened(false)
  }

  return (
    <Container isOpened={isDropDownOpened}>
      <div data-cy={`${orderOptions[currentOrder].name}Menu`} onClick={() => setIsDropDownOpened(!isDropDownOpened)} className="dropDownText">
        {orderOptions[currentOrder].name} {!isDropDownOpened ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <DropDownMenu isOpened={isDropDownOpened}>
        <ul>
          {orderOptions.map((item, index) => {
            if (index === 0) return
            return <li key={item.key} data-cy={`${item.name}OrderMenu`} onClick={() => changeOrder(index)}>{item.name}</li>
          })}
        </ul>
      </DropDownMenu>
    </Container>
  )
}