import { BarChart3, Globe, Mail, Package, PaintBucket, Rocket, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Header from '../assets/Header'
import Footer from '../assets/Footer'
import Banner from '../assets/Banner'
import SectionBreak from '../assets/SectionBreak'

export default function CatalystPage() {
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
        setTimeout(() => {
          scrollContainerRef.current?.scrollBy({ left: -1000, behavior: 'smooth' });
        }, 700);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-[#00dc82]" />,
      title: "$10,000 Advertisement Credit",
      description: "Boost your visibility with our advertising credit package",
    },
    {
      icon: <PaintBucket className="w-12 h-12 text-[#00dc82]" />,
      title: "Landing Page + Brand Kit",
      description: "Get a customized landing page and complete brand kit",
    },
    {
      icon: <Mail className="w-12 h-12 text-[#00dc82]" />,
      title: "Mailing List",
      description: "Build and manage your audience with our mailing list tools",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#00dc82]" />,
      title: "Fundraising",
      description: "Access powerful fundraising tools and resources",
    },
    {
      icon: <Package className="w-12 h-12 text-[#00dc82]" />,
      title: "Platform Release",
      description: "Covered platform release fees for your project",
    },
    {
      icon: <Rocket className="w-12 h-12 text-[#00dc82]" />,
      title: "Market Testing",
      description: "Comprehensive app testing and market analysis",
    },
    {
      icon: <Globe className="w-12 h-12 text-[#00dc82]" />,
      title: "Website Hosting",
      description: "Covered URL and website hosting fees",
    },
  ]

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Header />
      
      <section className="w-full pt-24 md:pt-24 lg:pt-32 relative">
        <div className="container mx-auto px-4 space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl/none">WAFORGE CATALYST</h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl tracking-[0.2em]">
                TURNING POTENTIAL INTO PROGRESS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Catalyst is a program to help student developers put their product into the market. WAForge provides <span className="text-[#00dc82]">marketing, financial,</span> and <span className="text-[#00dc82]">development</span> aid to projects that get accepted into this program.
          </p>
        </div>
      </section>

      <div className="py-20">
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .scroll-container {
            scroll-behavior: smooth;
          }
          
          @keyframes bounce-horizontal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
          }
        `}</style>
        
        <div className="max-w-7xl mx-auto relative">
          {showLeftScroll && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-black to-transparent pl-2 pr-6 py-20 group"
            >
              <ChevronLeft className="w-8 h-8 text-[#00dc82] animate-bounce-horizontal opacity-75 group-hover:opacity-100 transition-opacity" />
            </button>
          )}
          
          {showRightScroll && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-black to-transparent pr-2 pl-6 py-20 group"
            >
              <ChevronRight className="w-8 h-8 text-[#00dc82] animate-bounce-horizontal opacity-75 group-hover:opacity-100 transition-opacity" />
            </button>
          )}

          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto hide-scrollbar scroll-container"
          >
            <div className="flex space-x-6 min-w-max p-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-[300px] p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#00dc82]/20 
                           hover:border-[#00dc82]/40 transition-all duration-300 hover:transform hover:scale-105
                           hover:shadow-[0_0_20px_rgba(0,255,149,0.237)]"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {benefit.icon}
                    <h3 className="text-white text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-20">
        <a href="https://forms.gle/Ns24R2RS9s212eD17" target="_blank" rel="noopener noreferrer">
          <button className='relative inline-flex items-center justify-center p-0.5 mt-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white'>
            <span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2'>
              Apply Now
            </span>
          </button>
        </a>
      </div>
      <SectionBreak />
      <Footer />
    </div>
  )
}