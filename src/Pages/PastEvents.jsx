import { useEffect, useRef, useState } from "react"
import Banner from "../assets/Banner"
import Header from "../assets/Header"
import workshop from "../assets/Pictures/workshop.jpg"
import waiting from "../assets/Pictures/waiting.png"
import working from "../assets/Pictures/working.png"
import participants from "../assets/Pictures/Participants.png"
import echo3d from '../assets/Pictures/Echo3d.webp'
import geogebra from '../assets/Pictures/Geogebra.png'
import nasaa from '../assets/Pictures/NASAA.png'
import SSD from '../assets/Pictures/SSD.png'
import Digipen from '../assets/Pictures/Digipen.png'
import Ryzlink from '../assets/Pictures/Ryzlink.png'
import discussing from '../assets/Pictures/discussing.png'
import getprize from '../assets/Pictures/getprize.png'
import judging from '../assets/Pictures/judging.png'
import present from '../assets/Pictures/present.png'

const SecondSubtitle = ({ text }) => {
    return (
        <h2 className="text-xl md:text-2xl font-['Montserrat',_sans-serif] font-light text-white my-6 text-center px-4">
            {text}
        </h2>
    )
}

const Card = ({ title, description, titleSize = "1.5em", descriptionSize = "1em", extraStyles = "" }) => {
    return (
        <div
            className={`bg-[#1a1a1c] rounded-xl p-4 md:p-6 text-center shadow-md hover:-translate-y-1 transition-all duration-300 w-full ${extraStyles}`}
        >
            <h3 className="text-white font-Poppins mb-2 break-words" style={{ fontSize: titleSize }}>
                {title}
            </h3>

            {description && (
                <p className="text-[#00dc82] font-Poppins break-words" style={{ fontSize: descriptionSize }}>
                    {description}
                </p>
            )}
        </div>
    )
}

const SponsorCard = ({ name, logo, website, tier = "sponsor" }) => {
    const tierStyles = {
        sponsor: "bg-[#1a1a1c] p-4 md:p-6",
    }

    const content = (
        <div
            className={`rounded-xl text-center shadow-md hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] w-full ${tierStyles[tier]}`}
        >
            {logo ? (
                <img
                    src={logo || "/placeholder.svg"}
                    alt={`${name} logo`}
                    className="w-full h-auto max-h-16 md:max-h-20 object-contain mx-auto mb-3"
                />
            ) : (
                <div className="w-full h-16 md:h-20 bg-gray-600 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Logo</span>
                </div>
            )}
            <h4 className="text-white font-Poppins font-medium text-sm md:text-base break-words">{name}</h4>
        </div>
    )

    return website ? (
        <a href={website} target="_blank" rel="noopener noreferrer" className="block w-full">
            {content}
        </a>
    ) : (
        content
    )
}

const TextRain = ({ texts }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            }
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        const particles = []

        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                text: texts[Math.floor(Math.random() * texts.length)],
                speed: 0.5 + Math.random() * 1.5,
                size: 10 + Math.random() * 14,
                opacity: 0.1 + Math.random() * 0.3,
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                ctx.font = `${particle.size}px Poppins`
                ctx.fillStyle = `rgba(0, 220, 130, ${particle.opacity})`
                ctx.fillText(particle.text, particle.x, particle.y)

                particle.y += particle.speed

                if (particle.y > canvas.height) {
                    particle.y = -20
                    particle.x = Math.random() * canvas.width
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [texts])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

const PastEventsHackathonSection = () => {
    const [activeYear, setActiveYear] = useState("2025")
    const texts = ['print("Hello, World!")', 'console.log("Hello World");', 'public string "Hello World";', 'System.out.println("Hello, World!");', 'echo "Hello, World!"']

    const data2025 = {
        eventStats: [{ title: "60+ participants" }, { title: "25+ projects" }, { title: "$20k in support" }],
        winners: [
            {
                title: "Blessed",
                description: "First Place",
                link: "",
            },
            {
                title: "JetQuest",
                description: "Second Place",
                link: "https://jetquest.vercel.app",
            },
            {
                title: "Envora",
                description: "Third Place",
                link: "https://devpost.com/software/envora",
            },
        ],
        specialAwards: [
            {
                title: "BHS Gamedev",
                description: "Best UI",
                link: "",
            },
            {
                title: "EvoVoyage",
                description: "Best Functionality",
                link: "https://eco-voyage-official.vercel.app/",
            },
        ],
        sponsors: {
            general: [
                {
                    name: "",
                    logo: Ryzlink,
                    website: "https://example.com",
                    tier: "sponsor",
                },
                {
                    name: "",
                    logo: Digipen,
                    website: "https://example.com",
                    tier: "sponsor",
                },
            ],
        },
    }

    const data2024 = {
        eventStats: [{ title: "50+ participants" }, { title: "24 schools" }, { title: "28 submissions" }],
        winners: [
            {
                title: "The Monster's Meal",
                description: "First Place",
                link: "https://waforge.devpost.com/submissions/485517-the-monster-s-meal",
            },
            {
                title: "The Foodspect App",
                description: "Second Place",
                link: "https://waforge.devpost.com/submissions/485501-foodspect-app",
            },
            {
                title: "Flappy Bird Exercise",
                description: "Third Place",
                link: "https://waforge.devpost.com/submissions/485504-flappy-bird-and-exercise",
            },
        ],
        specialAwards: [
            {
                title: "Fitness Tracker",
                description: "Best UI",
                link: "https://waforge.devpost.com/submissions/485459-fitness-tracker-waforge-hackathon",
            },
            {
                title: "VedRX",
                description: "Best Functionality",
                link: "https://waforge.devpost.com/submissions/485521-vedrx",
            },
        ],
        sponsors: {
            general: [
                {
                    name: "",
                    logo: echo3d,
                    website: "https://echo3d.co",
                    tier: "sponsor",
                },
                {
                    name: "",
                    logo: nasaa,
                    website: "https://nasaausa.org/",
                    tier: "sponsor",
                },
                {
                    name: "",
                    logo: SSD,
                    website: "https://seattlesoftwaredevelopers.com/",
                    tier: "sponsor",
                },
                {
                    name: "",
                    logo: Digipen,
                    website: "https://digipen.edu",
                    tier: "sponsor",
                },
                {
                    name: "",
                    logo: geogebra,
                    website: "https://geogebra.org",
                    tier: "sponsor",
                },
            ],
        },
    }

    const currentData = activeYear === "2025" ? data2025 : data2024

    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            <div
                className="relative z-[9999] bg-transparent w-full"
                style={{
                    isolation: "isolate",
                    background: "transparent !important",
                    opacity: "1 !important",
                    filter: "none !important",
                }}
            >
                <div style={{ background: "transparent", opacity: "1", filter: "none" }} className="w-full">
                    <Header />
                </div>
                <div style={{ background: "transparent", opacity: "1", filter: "none" }} className="w-full">
                    <Banner />
                </div>
            </div>

            <section className="relative w-full overflow-x-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] z-0" />
                <div className="absolute inset-0 bg-black/70 z-10" />

                <div className="absolute inset-0 z-20 hidden md:block overflow-hidden">
                    <TextRain texts={texts} />
                </div>

                <div className="relative z-30 w-full max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center mb-8 animate-fade-in">
                        <div className="inline-flex bg-[#0c0c0d]/90 backdrop-blur-sm rounded-2xl p-2 shadow-[0_0_30px_rgba(0,220,130,0.15)] max-w-full overflow-hidden">
                            <button
                                onClick={() => setActiveYear("2025")}
                                className={`px-4 sm:px-8 py-4 rounded-xl font-Poppins font-medium transition-all duration-300 text-sm sm:text-base ${
                                    activeYear === "2025"
                                        ? "bg-[#00dc82] text-black shadow-[0_0_15px_rgba(0,220,130,0.3)]"
                                        : "text-white hover:bg-[#1a1a1c]"
                                }`}
                            >
                                WAFORGE 2025
                            </button>
                            <button
                                onClick={() => setActiveYear("2024")}
                                className={`px-4 sm:px-8 py-4 rounded-xl font-Poppins font-medium transition-all duration-300 text-sm sm:text-base ${
                                    activeYear === "2024"
                                        ? "bg-[#00dc82] text-black shadow-[0_0_15px_rgba(0,220,130,0.3)]"
                                        : "text-white hover:bg-[#1a1a1c]"
                                }`}
                            >
                                WAFORGE 2024
                            </button>
                        </div>
                    </div>

                    <div className="text-center mb-16 animate-fade-in px-4">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-Poppins font-light tracking-[0.1em] sm:tracking-[0.2em] mb-4 break-words">
                            <span className="relative inline-block textGlow after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00dc82] after:opacity-50">
                                WAFORGE {activeYear}
                            </span>
                        </h1>
                    </div>

                    <div
                        key={activeYear}
                        className="bg-[#0c0c0d]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-12 mb-16 shadow-[0_0_30px_rgba(0,220,130,0.15)] animate-slide-up w-full max-w-full"
                    >
                        <SecondSubtitle text={`Thank you all for a great ${activeYear} hackathon!`} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 w-full">
                            {currentData.eventStats.map((stat, index) => (
                                <div key={index} className="animate-scale-in w-full" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                                    <Card
                                        titleSize="20px"
                                        title={stat.title}
                                        extraStyles="font-extralight hover:shadow-[0_0_15px_rgba(0,220,130,0.2)]"
                                    />
                                </div>
                            ))}
                        </div>

                        <SecondSubtitle text="Congrats to all the winners!" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 w-full">
                            {currentData.winners.map((winner, index) => (
                                <div key={index} className="animate-scale-in w-full" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                                    {winner.link ? (
                                        <a href={winner.link} className="block w-full">
                                            <Card
                                                titleSize="1em"
                                                title={winner.title}
                                                description={winner.description}
                                                extraStyles="font-bold hover:bg-[#131314] hover:shadow-[0_0_20px_rgba(0,220,130,0.25)]"
                                            />
                                        </a>
                                    ) : (
                                        <Card
                                            titleSize="1em"
                                            title={winner.title}
                                            description={winner.description}
                                            extraStyles="font-bold"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-700/30 w-full">
                            <h3 className="text-lg font-['Montserrat',_sans-serif] font-light text-white/70 mb-4 text-center px-4">
                                Special Recognition
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                                {currentData.specialAwards.map((award, index) => (
                                    <div key={index} className="animate-scale-in w-full" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                                        {award.link ? (
                                            <a href={award.link} className="block w-full">
                                                <Card
                                                    titleSize="0.9em"
                                                    title={award.title}
                                                    description={award.description}
                                                    descriptionSize="0.85em"
                                                    extraStyles="font-medium opacity-80 hover:opacity-100 hover:bg-[#131314] hover:shadow-[0_0_15px_rgba(0,220,130,0.15)] scale-95"
                                                />
                                            </a>
                                        ) : (
                                            <Card
                                                titleSize="0.9em"
                                                title={award.title}
                                                description={award.description}
                                                descriptionSize="0.85em"
                                                extraStyles="font-medium opacity-80 scale-95"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {activeYear === "2025" && (
                        <div className="bg-[#0c0c0d]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-12 mb-16 shadow-[0_0_30px_rgba(0,220,130,0.15)] animate-slide-up-delayed w-full max-w-full">
                            <h2 className="text-2xl md:text-3xl font-['Montserrat',_sans-serif] font-extralight text-white mb-8 text-center px-4">
                                Pictures from WAForge 2025!
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={discussing}
                                        alt="Discussing"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={getprize}
                                        alt="Getting prize"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={judging}
                                        alt="Judging"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={present}
                                        alt="Presenting"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeYear === "2024" && (
                        <div className="bg-[#0c0c0d]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-12 mb-16 shadow-[0_0_30px_rgba(0,220,130,0.15)] animate-slide-up-delayed w-full max-w-full">
                            <h2 className="text-2xl md:text-3xl font-['Montserrat',_sans-serif] font-extralight text-white mb-8 text-center px-4">
                                Pictures from WAForge 2024!
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={waiting}
                                        alt="Waiting"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={participants}
                                        alt="Participants"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={working}
                                        alt="Working"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
                                    <img
                                        src={workshop}
                                        alt="Workshop"
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-[#0c0c0d]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-12 shadow-[0_0_30px_rgba(0,220,130,0.15)] animate-slide-up-delayed w-full max-w-full">
                        <h2 className="text-2xl md:text-3xl font-['Montserrat',_sans-serif] font-extralight text-white mb-8 text-center px-4">
                            {activeYear} Sponsors
                        </h2>
                        {currentData.sponsors.general.length > 0 && (
                            <div className="w-full">
                                <h3 className="text-lg font-['Montserrat',_sans-serif] font-light text-white/60 mb-6 text-center px-4">
                                    {activeYear === "2024" ? "Thank You to Our Sponsors" : "Thank You to Our Sponsors"}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4 w-full">
                                    {currentData.sponsors.general.map((sponsor, index) => (
                                        <div
                                            key={index}
                                            className="w-full sm:w-[250px] max-w-[300px] flex-shrink-0"
                                        >
                                            <SponsorCard {...sponsor} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PastEventsHackathonSection