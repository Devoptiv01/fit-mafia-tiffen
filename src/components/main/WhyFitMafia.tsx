'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { CheckCircle, Truck, Leaf, Calendar, ShieldCheck, Flame } from 'lucide-react';

const features = [
  { icon: <CheckCircle size={32} />, title: 'Dietitian-approved meals', description: 'Curated by expert nutritionists for your best health.' },
  { icon: <Truck size={32} />, title: 'Daily doorstep delivery', description: 'Fresh meals delivered to your door, every single day.' },
  { icon: <Leaf size={32} />, title: 'Seasonal ingredients', description: 'Only the freshest and most seasonal ingredients used.' },
  { icon: <Calendar size={32} />, title: 'Flexible subscriptions', description: 'Choose weekly or monthly plans that fit your lifestyle.' },
  { icon: <ShieldCheck size={32} />, title: 'Hygienic kitchens', description: 'Top-grade hygiene in cooking and packaging.' },
  { icon: <Flame size={32} />, title: 'Fit-focused meals', description: 'High-protein, low-carb meals designed for fitness goals.' },
];

export default function WhyFitMafia() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 px-6 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Why <span className="text-red-500">Fit Mafia</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Discover the key aspects that make healthy eating simple and convenient.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay = {{
          delay: 3000
        }}
        freeMode= {true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        loop={true}
        className='scroll-smooth'
      >
        {features.map((feature, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/60 border border-gray-200 backdrop-blur-md overflow-hidden group h-[190px]">
              
              {/* RED Gradient Background Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-300 via-orange-200 to-orange-300 opacity-90 group-hover:opacity-50 transition-all duration-500 rounded-3xl pointer-events-none"></div>

              <div className="relative z-10 text-red-500 mb-4">{feature.icon}</div>
              <h3 className="relative z-10 text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="relative z-10 text-gray-500 text-sm">{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-red-400 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 opacity-20 blur-3xl rounded-full z-0"></div>
    </section>
  );
}
