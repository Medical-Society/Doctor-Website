import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function DropDown() {
    const { auth, setAuth } = useAuth();
    const handleLogout = () => {
        setAuth({
          token: '',
          doctor: {
            _id: '',
            englishFullName: '',
            arabicFullName: '',
            email: '',
            password: '',
            specialization: '',
            clinicAddress: '',
            nationalID: '',
            phoneNumber: '',
            age: 0,
            avatar: '',
            about: '', 
            createdAt: '',
            updatedAt: '',
            status: '',
            gender: '',
            isVerified: false,
            __v: 0,
            posts: [],
            reviews: [],
          }
        });
        Cookies.remove('token');
        Cookies.remove('doctor');
    
      }

  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <div className="flex items-center gap-2">
              <img src={auth.doctor.avatar} alt="avatar" className="w-8 h-8 rounded-full bg-" />
              <span className="white">{auth.doctor.englishFullName}</span>
            </div>
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
          <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/profile"
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                        Profile
                  </NavLink>
                )}
              </Menu.Item>
            </div>
            
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`} 
                    onClick={handleLogout}
                  >
                    
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}
