import { DropdownActions } from './dropdownAction'
import Link from 'next/link';
const DropdownMenu = () => {

  const handleMenuOne = () => {
    <Link href={'app/login'}> </Link>
  };

  const handleMenuTwo = () => {
    <Link href='/app/login'><button>ppp</button> </Link>
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