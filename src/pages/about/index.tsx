import Image from "next/image"
export default function About() {
    return (
        <>
            <section className="section-size-2 about-hero-section">
                <div className="container">
                    <div className="grid center text-center">
                        <div className="column-6">
                            <div className="image pad-3">
                                <Image alt="Nevo example image" src="/othmane-n.png" width={1000} height={1000} />
                            </div>
                        </div>
                        <div className="column-6 pad-3">
                            <h1>Othmane N.</h1>
                            <h4>Code & UX Thinker</h4>
                            <a className="button default anchor-link" href="#buttons">Download my resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-size-2">
                <div className="container">
                    <div className="space-4 width-3 centered">
                        <h3>Bio</h3>
                        <p>I'm Othmane N., a Senior Fullstack developer based in Casablanca, Morocco 🇲🇦. With a wealth of experience and a passion for technology, I take immense pride in crafting exceptional digital experiences that have a lasting impact. Throughout my career, I've been fortunate to work on a diverse array of exciting projects, each presenting unique challenges and opportunities.</p>
                        <p><strong>👨‍💻 Programming Languages:</strong> I'm well-versed in a variety of programming languages, including JavaScript, TypeScript, Python, and I'm currently exploring Rust.</p>
                        <p><strong>🚀 Frontend:</strong> My expertise in frontend development spans across a range of frameworks and technologies, such as React, Vue, Vuex, JavaScript, TypeScript, Next.js, Nuxt.js, and Gatsby.js. I'm committed to creating seamless user experiences.</p>
                        <p><strong>⚙️ Backend:</strong> I have a strong foundation in backend development, with proficiency in Node.js, Express.js, Koa.js, Laravel, Core PHP, and hands-on experience with Django.</p>
                        <p><strong>📱 Mobile:</strong> My skills extend to mobile development, particularly in React Native and Android app development using Kotlin.</p>
                        <p><strong>📊 Databases:</strong> I'm well-versed in working with databases like Mariadb, MySQL, MongoDB, PostgreSQL, Redis, and Sqlite, enabling me to build robust and efficient data-driven applications.</p>
                        <p><strong>✅ Testing Tools:</strong> I use a range of testing tools, including Jest for testing React applications, Vue Test Utils for testing Vue.js applications, Mocha for Node.js backend testing, and Chai for Node.js backend testing, to ensure the reliability of the software I develop.</p>
                        <p><strong>🔧 DevOps and Microservices:</strong> I have experience with DevOps practices, including Docker and Docker Compose, and I specialize in building microservices with Node.js. I also have familiarity with message queuing systems like RabbitMQ.</p>
                    </div>
                </div>
            </section>
            
        </>
    )
}