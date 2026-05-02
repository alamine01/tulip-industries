import Image from "next/image";
import TeamImg from "@/public/original_96a47d8eae8798dc26b3a0e8e07b6905.jpg";

export default function LargeTestimonial() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center mb-12">
            <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
              Why Tulip Industries?
            </div>
            <h2 className="text-3xl font-bold md:text-5xl text-gray-900 tracking-tight">Local Innovation, Global Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep local knowledge of the African market with world-class engineering to deliver solutions that actually work where they are needed most.
            </p>
          </div>
          <div className="overflow-hidden rounded-[3rem] bg-gray-900 shadow-2xl transition-all duration-500 hover:shadow-blue-500/10" data-aos="zoom-y-out">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-72 md:h-auto md:w-1/2">
                <Image
                  className="absolute inset-0 h-full w-full object-cover transform hover:scale-105 transition-transform duration-1000"
                  src={TeamImg}
                  alt="Tulip Industries Team"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:w-1/2 md:p-16 relative">
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg className="w-20 h-20 fill-white" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.89543 10.9124 7 12.017 7H19.017C20.1216 7 21.017 7.89543 21.017 9V15C21.017 17.2091 19.2261 19 17.017 19H14.017V21ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.53528 13 -1.017 12.5523 -1.017 12V9C-1.017 7.89543 -0.12157 7 0.983 7H8.017C9.12157 7 10.017 7.89543 10.017 9V15C10.017 17.2091 8.2261 19 6.017 19H3.017V21Z" />
                  </svg>
                </div>
                
                <blockquote className="text-2xl font-medium text-gray-200 mb-8 leading-relaxed">
                  "Our mission is to bridge the digital divide in Africa by providing robust, accessible, and high-performance hardware and software ecosystems."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-blue-500" />
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Mountaga Keita — Founder & CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
