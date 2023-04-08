import Link from 'next/link'
import React from 'react'

type Props = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
}

const SinglePost = (props: Props) => {
    const {title, description, date, tags, slug} = props;

  return (
    <>
    <section className=" lg:w-1/2 bg-sky-800 mb-8 mx-auto rounded-md p-5
    shadow-2xl hover:shadow-none duration-300
    hover:translate-y-1 transition-all">
        <div className='flex item-center gap-3'>
            <h2 className='text-gray-100 text-2xl font-medium mb-2'>
              <Link href={`/posts${slug}`} >{title}</Link>
            </h2>
            <div className='text-gray-100'>{date}</div>
            {tags.map((tag) => (
                // eslint-disable-next-line react/jsx-key
                <span className='text-white bg-gray-500 rounded-xl px-2 pb-1 font-medium'>
              {tag}
            </span>

            ))}

        </div>
        <p className='text-gray-100'>{description}</p>
    </section>
    </>
  )
}

export default SinglePost
