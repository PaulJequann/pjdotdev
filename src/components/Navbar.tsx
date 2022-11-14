import { Popover, Transition } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NextComponentType } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Logo from "../../public/images/TempLogo.png";
import { socials } from "./socials";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar: NextComponentType = () => {
  return (
    <div className="relative overflow-visible">
      <Popover as="header" className="relative">
        <div className="bg-zinc-900 pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Paul JeQuann</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={Logo}
                    alt=""
                    height={75}
                    width={75}
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-zinc-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars4Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-2 mr-10 flex flex-row">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-8 w-8" aria-hidden={true} />
                </a>
              ))}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >
                <p>Let&apos;s work!</p>
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-md bg-zinc-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={Logo.toString()} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-yellow-600 text-white font-medium hover:bg-yellow-700"
                  >
                    <p>Let&apos;s work!</p>
                  </a>
                </div>
                {/* <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a href="#" className="text-gray-900 hover:underline">
                        Login
                      </a>
                    </p>
                  </div> */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;
