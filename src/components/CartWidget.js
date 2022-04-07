import { Menu, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import React, { Fragment} from 'react'
import CartQuantity from './CartQuantity'




const CartWidget = ({classNames}) => {
    

    return (
        <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 p-1 focus:ring-offset-2 p-1 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Shopping cart</span>
                            <ShoppingCartIcon className="h-6 w-6 text-gray-400 hover:text-gray-200" aria-hidden="true"/>
                            <CartQuantity/>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                View the cart
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Finish buying
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Clear cart
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
    )
}

export default CartWidget
