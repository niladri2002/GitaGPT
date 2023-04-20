import React from 'react'
import "./about.css"
import Navbar from "./Navbar";
function About() {
    return (
        <>
        <Navbar/>
            <section className='first background'>
                <div >
                <div className='firsthalf'>
                         <img src={require('./gita.png')} alt='Picture'></img> 
                         </div>
                    <div className='main'>
                        
                         <div className='secondhalf'>
                        <p>
                            Welcome to our page dedicated to using the Bhagavad Gita to solve real-life problems! Here, we combine the ancient wisdom of the Gita with the cutting-edge technology of OpenAI to generate insightful responses to the challenges that people face in their everyday lives.

                            Our page is built on the concept of prompt engineering, where we use carefully crafted prompts to generate AI-generated responses from the Bhagavad Gita. Our team of experts has curated a collection of common problems that people face, ranging from relationships to career to personal growth. We then use OpenAI's GPT-3 language model to generate responses based on the prompts.

                            The Bhagavad Gita is one of the most revered scriptures in the Hindu religion, offering guidance and inspiration for millions of people around the world. Its teachings are timeless and universal, offering insights that are just as relevant today as they were thousands of years ago.

                            At our page, we aim to apply the wisdom of the Gita to the problems that people face in their lives. Whether you are seeking advice on how to navigate a difficult relationship, looking for guidance on finding your life's purpose, or simply seeking inspiration to overcome a challenge, our AI-generated responses can offer a fresh perspective and a source of comfort.

                            We invite you to explore our page and discover the transformative power of the Bhagavad Gita. Join us on a journey of self-discovery and personal growth as we apply the ancient wisdom of the Gita to the challenges of modern life.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
