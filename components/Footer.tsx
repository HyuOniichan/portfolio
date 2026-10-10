import React from 'react'
import MagicButton from './ui/MagicButton'
import { IoIosSend } from 'react-icons/io'
import { socials } from '@/data'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-20' id="contact">
            <div className='flex flex-col items-center'>
                <TextGenerateEffect
                    className='heading'
                    words="Ready to take the next step? Let's connect!"
                    changeColorIdx={{
                        start: 6,
                        end: 8,
                        color: 'text-blue-400'
                    }}
                />
                <p className='text-gray-200 mb-5 text-center text-lg'>
                    Reach out to me to day and let&apos;s start a conversation about
                    how I can help you achieve your goals.
                </p>
                <a href="mailto:dangnguyenduchuy@gmail.com">
                    <MagicButton
                        title='Get in touch'
                        icon={<IoIosSend />}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-3'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    Copyright © {new Date().getFullYear()} Huy DND
                </p>
                <div className='flex items-center gap-4'>
                    {socials.map((social) => (
                        <Link
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='cursor-pointer flex justify-center items-center bg-black-200'
                        >
                            <social.icon className='w-10 md:w-8 h-10 md:h-8' />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer