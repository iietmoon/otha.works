import Image from "next/image"
export default function About() {
    return (
        <>
            <section className="section-size-2 about-hero-section">
                <div className="container">
                    <div className="grid center text-center">
                        <div className="column-7">
                            <div className="image">
                                <Image alt="Nevo example image" src="/othmane-n.png" width={1000} height={1000} />
                            </div>
                            <h3>Hi, I&apos;m Othmane 👋</h3>
                            <p className="animate__animated animate__fadeIn">Passionate about blending code with creativity, I specialize in crafting seamless digital experiences that captivate users. With expertise in both development and UX design, I strive to deliver innovative solutions that resonate and inspire.</p>
                            <a className="button default anchor-link" href="#buttons">Download my resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-size-2">
                <div className="container">
                    <div className=" width-4 centered">
                        <h3>The Story of my <span className="underlined">technologies</span></h3>
                        <p>I&apos;m Othmane N., a Senior Fullstack developer based in Casablanca, Morocco 🇲🇦. With a wealth of experience and a passion for technology, I take immense pride in crafting exceptional digital experiences that have a lasting impact. Throughout my career, I&apos;ve been fortunate to work on a diverse array of exciting projects, each presenting unique challenges and opportunities.</p>
                        <p><strong>👨‍💻 Programming Languages:</strong> I&apos;m well-versed in a variety of programming languages, including JavaScript, TypeScript, Python, and I&apos;m currently exploring Rust.</p>
                        <p><strong>🚀 Frontend:</strong> My expertise in frontend development spans across a range of frameworks and technologies, such as React, Vue, Vuex, JavaScript, TypeScript, Next.js, Nuxt.js, and Gatsby.js. I&apos;m committed to creating seamless user experiences.</p>
                        <p><strong>⚙️ Backend:</strong> I have a strong foundation in backend development, with proficiency in Node.js, Express.js, Koa.js, Laravel, Core PHP, and hands-on experience with Django.</p>
                        <p><strong>📱 Mobile:</strong> My skills extend to mobile development, particularly in React Native and Android app development using Kotlin.</p>
                        <p><strong>📊 Databases:</strong> I&apos;m well-versed in working with databases like Mariadb, MySQL, MongoDB, PostgreSQL, Redis, and Sqlite, enabling me to build robust and efficient data-driven applications.</p>
                        <p><strong>✅ Testing Tools:</strong> I use a range of testing tools, including Jest for testing React applications, Vue Test Utils for testing Vue.js applications, Mocha for Node.js backend testing, and Chai for Node.js backend testing, to ensure the reliability of the software I develop.</p>
                        <p><strong>🔧 DevOps and Microservices:</strong> I have experience with DevOps practices, including Docker and Docker Compose, and I specialize in building microservices with Node.js. I also have familiarity with message queuing systems like RabbitMQ.</p>
                    </div>
                </div>
            </section>
            
        </>
    )
}