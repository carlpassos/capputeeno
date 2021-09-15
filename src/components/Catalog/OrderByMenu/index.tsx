import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { 
  Container,
  DropDownMenu,
} from './styles'

export function OrderByMenu() {

  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  return (
    <Container>
      <div onClick={() => setIsDropDownOpened(!isDropDownOpened)} className="dropDownText">
        Organizar por test {!isDropDownOpened ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <DropDownMenu isOpened={isDropDownOpened}>
        <ul>
          <li>Novidades</li>
          <li>Preço: Maior - menor</li>
          <li>Preço: Menor - maior</li>
          <li>Mais vendidos</li>
        </ul>
      </DropDownMenu>
    </Container>
  )
}