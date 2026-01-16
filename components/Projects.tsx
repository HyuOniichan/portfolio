import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { projects } from '@/data'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Projects = () => {
    return (
        <section id='projects' className='py-10'>
            <TextGenerateEffect
                className='heading'
                words='My proud projects'
                changeColorIdx={{
                    start: 2,
                    end: 3,
                    color: 'text-blue-400'
                }}
            />
            
            <BentoGrid className='py-6'>
                {projects.map(({ 
                    id, 
                    title, 
                    description,
                    img,
                    className, 
                    titleClassName 
                }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        img={img}
                        className={className}
                        titleClassName={titleClassName}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Projects