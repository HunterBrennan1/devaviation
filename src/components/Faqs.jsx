import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is the hourly rate to rent?',
      answer:
        'Depends on the aircraft but our prices are very competetive and affortable, refrence pricing above.',
    },
    {
      question: 'How many aircrafts does Devaney Aviation offer?',
      answer: 'Currently we offer 2 aircrafts, The Cessna 150 and Cherokee 140',
    },
    {
      question: 'Where would I locate the required forms to rent?',
      answer:
        'Contact us via phone (772)-708-4104 or email DevaneyAviation1@gmail.com to schedule a meeting',
    },
  ],
  [
    {
      question: 'What do new renters to Devaney Aviation need to bring in?',
      answer:
        'Medical, Pilot License, Proof of Currency (Logbook with BFR endorsement, recent check ride, etc), Insurance Form, and a Drivers License',
    },
    {
      question:
        'What makes Devaney Aviation different from other companies?',
      answer:
        'We are locally owned and take pride in maintaining our aircraft with a personal level of touch',
    },
    {
      question:
        'How long will an aircraft Checkout Take?',
      answer:
        'Devaney Aviation requires at least 1 hour in air with instructor. This is subject to change based on experience level of renter',
    },
  ],
  [
    {
      question: 'What scheduling service does Devaney Aviation use?',
      answer:
        'We use flightcircle.com to manage our clients!',
    },
    {
      question: 'Does Devaney Aviation reimburse renters for fuel?',
      answer: 'No, Devaney Aviation will not reimburse for fuel cost'
    },
    {
      question: 'Is Devaney Aviation Locally owned?',
      answer:
        'Yes we are locally owned and based out of Palm City Florida',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
