import { feedbacks } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Feedbacks = () => {
    return (
        <section id='feedbacks' className='py-10'>
            <TextGenerateEffect
                className='heading'
                words='Feedbacks from clients'
                changeColorIdx={{
                    start: 2,
                    end: 3,
                    color: 'text-blue-400'
                }}
            />

            <InfiniteMovingCards 
                items={feedbacks}
                direction='left'
                speed='normal'
            />
        </section>
    )
}

export default Feedbacks