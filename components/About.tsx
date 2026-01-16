import { aboutText } from '@/data'
import { BentoGrid } from './ui/BentoGrid'
import { CometCard } from './ui/CometCard'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const About = () => {
    return (
        <section id='about' className='py-10'>
            <TextGenerateEffect
                className='heading'
                words='About Me'
                changeColorIdx={{
                    start: 1,
                    end: 2,
                    color: 'text-blue-400'
                }}
            />

            <BentoGrid className='py-6'>
                {/* Avatar */}
                <div className='group/bento relative col-span-2 row-span-2 md:row-span-3 flex flex-col justify-between rounded-full overflow-hidden transition duration-200 bg-black-100 max-w-100 mx-auto'>
                    <CometCard
                        rotateDepth={10}
                        translateDepth={10}
                    >
                        <div className='w-full h-full aspect-square relative'>
                            {/* Border with increasing opacity from bottom to top */}
                            <div className='absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black-100 to-transparent pointer-events-none rounded-2xl'></div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src='/avatar.png'
                                alt='Huy FaceID'
                                className='object-cover w-full h-full'
                            />
                        </div>
                    </CometCard>
                </div>

                {/* Wall of text */}
                <div className='group/bento relative col-span-4 row-span-2 md:row-span-4 lg:row-span-3 grid grid-cols-2 grid-rows-4 gap-2 rounded-2xl p-4 transition duration-200'>
                    {aboutText.map((item, id) => (
                        <div 
                            key={id}
                            className={`group/bento ${id == 0 ? 'justify-evenly col-span-2 row-span-2' : 'col-span-1 row-span-1'} flex flex-col justify-center`}
                        >
                            <h3 className={`${id == 0 && 'indent-4'} text-xl md:text-base lg:text-xl font-semibold`}>
                                {item.title}
                            </h3>
                            <p className={`${id == 0 ? 'text-sm' : 'text-xs'} md:text-sm lg:text-lg whitespace-pre-line`}>
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </BentoGrid>
        </section>
    )
}

export default About