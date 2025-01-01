import Image from "next/image";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
import { faDog } from '@awesome.me/kit-KIT_CODE/icons/duotone/solid'
import { faDragon } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'

const element = (
  <div>
    <FontAwesomeIcon icon={faHouse} />
    <FontAwesomeIcon icon={faCat} />
    <FontAwesomeIcon icon={faDog} />
    <FontAwesomeIcon icon={faDragon} />
  </div>
)

export default function Home() {
  return (
    <div>
      <h1>Urban Rent</h1>
    </div>
  );
}
