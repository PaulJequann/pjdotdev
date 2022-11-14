import { NextComponentType } from "next";
import Image from "next/image";
import { socials } from "../socials";
import Logo from "../../../public/images/TempLogo.png";

const HeroSection: NextComponentType = () => {
  return (
    <div className="pt-10 bg-zinc-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Paul JeQuann</span>
              </h1>
              <h2 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block text-yellow-600">Cloud Engineer</span>
                <span className="block text-yellow-600">DevOps</span>
              </h2>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
              <div className="mt-10 sm:mt-12 dark:text-white">
                <div className="flex flex-row">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-500 hover:text-gray-300"
                    >
                      <span className="sr-only">{social.name}</span>
                      <social.icon className="h-10 w-10" aria-hidden={true} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Logo}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
