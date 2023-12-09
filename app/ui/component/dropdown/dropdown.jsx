import { DropdownActions } from './dropdownAction'
import Button from '../button/button';
import Link from 'next/link';
const DropdownMenu = () => {

  const handleMenuOne = () => {
    <Link href={'app/login'}> </Link>
  };

  const handleMenuTwo = () => {
    <Link href={'app/login'}> </Link>
  };
  return (
    <div>

      <DropdownActions
        defaultDisplayName={"Syawal"}
        menu={[handleMenuOne, handleMenuTwo]}
      />

    </div>
  )
}

export default DropdownMenu