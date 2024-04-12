'use client'

import { Carousel } from "flowbite-react";
import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import Cessna from '@/images/screenshots/cessna.jpg'
import Cessna2 from '@/images/screenshots/cessna2.JPG'
import Cessna3 from '@/images/screenshots/cessna3.JPG'
import Cessna4 from '@/images/screenshots/cessna4.JPG'
import cherokee from '@/images/screenshots/cherokee.jpg'
import cherokee2 from '@/images/screenshots/cherokee2.jpg'
import cherokee3 from '@/images/screenshots/cherokee3.jpg'



export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32  bg-slate-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-4xl tracking-tight text-white sm:text-4xl">
            Rentals We Offer!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-400">
            Looking to spread your wings and take to the sky? Consider earning your hours with some of our popular planes below!
          </p>
        </div>
        <div className='flex flex-row justify-evenly text-center pt-5 gap-5 h-auto'>
        <div className='flex flex-col w-full justify-center'>
          <h3 className='font-bold text-xl text-white'>CESSNA 150</h3>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full pt-5">
      <Carousel slide={false}>
        <img className="rounded-md"  src={ Cessna.src } alt="..." />
        <img className="rounded-md"  src={ Cessna2.src } alt="..." />
        <img className="rounded-md"  src={ Cessna3.src } alt="..." />
        <img className="rounded-md"  src={ Cessna4.src } alt="..." />
      </Carousel>
    </div>
        </div>
        <div className='flex flex-col w-full
        '>
          <h3 className='font-bold text-lg text-white'>CHEROKEE 140</h3>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full pt-5">
      <Carousel slide={false}>
        <img className="rounded-md"  src={ cherokee.src } alt="..." />
        <img className="rounded-md"  src={ cherokee2.src } alt="..." />
        <img className="rounded-md"  src={ cherokee3.src } alt="..." />
      </Carousel>
    </div>
        </div>
        </div>
      </Container>
      <div className="w-full text-center mt-10">
      <a class="group inline-flex items-center justify-center rounded-full py-2 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 mt-10" color="blue" variant="solid" href="#pricing">See Pricing!</a>
      </div>
    </section>
  )
}
