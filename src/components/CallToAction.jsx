import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Follow us on instagram!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Keep up to date with all the latest deals and offers! Follow us today to get a deeper look into our goals and plans for the future.
          </p>
          <Button href="https://www.instagram.com/devaneyaviation/?igsh=OWJ4bjg0N2F0eWdu&utm_source=qr" target="_blank" color="white" className="mt-10">
            Instagram: @Devaneyaviation
          </Button>
        </div>
      </Container>
    </section>
  )
}
