import { experiences } from '@/data'
import { ExpandableCardDemo } from './ui/ExpandableCard'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Experience = () => {
    return (
        <section id="experience" className='py-10'>
            <TextGenerateEffect
                className='heading'
                words='Work experience'
                changeColorIdx={{
                    start: 1,
                    end: 2,
                    color: 'text-blue-400'
                }}
            />

            <div className='w-full mt-12 '>
                <ExpandableCardDemo 
                    cards={experiences}
                />
            </div>
        </section>
    )
}

export default Experience