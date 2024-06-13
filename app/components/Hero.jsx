import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
      <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
        <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
          <h1 className='mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl'>
            It&rsquo;s The Unofficial Merch Store
          </h1>
          <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
            For educational purposes only. If you'd like to purchase any of these items, please go
            to https://sway-bae-shop.fourthwall.com/
          </p>
        </div>

        <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
          <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image
              src='/hero-image-1.webp'
              alt='Hero 1'
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>

          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image
              src='/hero-image-2.webp'
              alt='Hero 2'
              className='h-full w-full object-cover object-center'
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div className='flex h-12 w-72 divide-x overflow-hidden rounded-lg border text-sm'>
          <Link
            href='/Shirts'
            className='flex w-1/3 items-center justify-center text-gray-300 transition duration-100 hover:bg-gray-800 active:bg-gray-100'
          >
            Shirts
          </Link>
          <Link
            href='/Outerwear'
            className='flex w-1/3 items-center justify-center text-gray-300 transition duration-100 hover:bg-gray-800 active:bg-gray-100'
          >
            Outerwear
          </Link>
          <Link
            href='/Accessories'
            className='flex w-1/3 items-center justify-center text-gray-300 transition duration-100 hover:bg-gray-800 active:bg-gray-100'
          >
            Accessories
          </Link>
        </div>
      </div>
    </section>
  )
}
