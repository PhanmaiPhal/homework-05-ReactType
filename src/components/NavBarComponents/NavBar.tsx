
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function NavBarComponents() {
  return (
    <Navbar fluid rounded >
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className='w-[50px] pl-2' alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-2">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse className='flex m-auto text-[100px]'>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className=''>About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
