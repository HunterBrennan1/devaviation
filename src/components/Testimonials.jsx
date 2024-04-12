import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
      "Devaney Aviation offers top-notch rentals! Both the Cessna 150 and Cherokee 140 were in great condition. The staff made the process smooth and enjoyable. Highly recommend!",
      author: {
        name: 'Sheryl Berge',
        role: 'Florida Resident',
        image: avatarImage1,
      },
    },
    {
      content:
      "Devaney Aviation exceeded my expectations. Their Cessna 150 and Cherokee 140 rentals were clean and well-equipped. Friendly staff and seamless service. Will definitely return!",
      author: {
        name: 'Amy Hahn',
        role: 'Florida Resident',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
      "Devaney Aviation delivers exceptional rentals! Both the Cessna 150 and Cherokee 140 were in pristine condition. The rental process was seamless, and the staff was friendly and knowledgeable. Highly recommended for a great flying experience!",
      author: {
        name: 'Peter Renolds',
        role: 'Florida Resident',
        image: avatarImage3,
      },
    },
    
    {
      content:
      "Devaney Aviation provided a fantastic rental experience. The Cessna 150 and Cherokee 140 were well-maintained and performed flawlessly. Great service and competitive rates. Highly recommended!",
      author: {
        name: 'Erin Powlowski',
        role: 'Florida Resident',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
      "Impressed with Devaney Aviation! Rented both the Cessna 150 and Cherokee 140—both in excellent shape. Easy rental process and helpful staff. Looking forward to flying with them again!",
      author: {
        name: 'Leland Kiehn',
        role: 'Florida Resident',
        image: avatarImage5,
      },
    }, 
    {
      content:
      "Highly recommend Devaney Aviation for rentals! Both the Cessna 150 and Cherokee 140 were clean and well-maintained. Smooth rental process and friendly staff. Can't wait to fly with them again!",
      author: {
        name: 'Amy Hahn',
        role: 'Florida Resident',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by Florida Locals.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Discover why customers love Devaney Aviation! Our Cessna 150 and Cherokee 140 rentals consistently earn rave reviews for their pristine condition, seamless process, and friendly staff. Join our satisfied flyers today!
          
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
