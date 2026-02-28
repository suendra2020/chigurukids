import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Star, Users, Lightbulb, Heart } from "lucide-react";

const heroImages = [
  "/img/1.png",
  "/img/4.png",
  "/img/5.png",
    "/img/6.png",
  "/img/7.png",
  "/img/8.png",
  "/img/9.png",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-10">🎨</div>
        <div className="absolute top-32 right-20 text-5xl animate-sway opacity-10">📚</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce-up opacity-10">🎉</div>
        <div className="absolute bottom-40 right-10 text-5xl animate-rotate-slow opacity-10">⭐</div>
        <div className="absolute top-1/2 left-1/4 text-6xl animate-float-diagonal opacity-10">🌈</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-shimmer opacity-10">💡</div>
        <div className="absolute top-2/3 right-1/3 text-6xl animate-pulse-glow opacity-10">🎭</div>
        <div className="absolute bottom-1/3 left-1/3 text-5xl animate-sway opacity-10">🎵</div>
      </div>

      {/* Hero Carousel */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden rounded-b-3xl z-10">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full  object-center"
              />
              {/* <div className="absolute inset-0 bg-black/30"></div> */}
            </div>
          ))}
        </div>

        {/* Hero Text */}
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Nurturing Young Minds
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            with Care & Creativity
          </p>
          <Link href="/contact">
            <a className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#558B2F] transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-up">
              Enroll Now
            </a>
          </Link>
        </div> */}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all z-20"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all z-20"
        >
          <ChevronRight size={32} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Welcome to Chiguru KIDS
            </h2>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              At Chiguru KIDS Preschool, we believe in nurturing young minds through play-based learning and creative exploration. Our experienced teachers create a safe, stimulating environment where children develop confidence, curiosity, and a love for learning.
            </p>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              We focus on holistic development—cognitive, physical, social, and emotional—ensuring every child thrives and reaches their full potential.
            </p>
            <Link href="/about">
              <a className="btn-primary inline-block">Learn More About Us</a>
            </Link>
          </div>
          <div className="animate-slide-up">
            <img
              src="/img/5.png"
              alt="Classroom"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-card py-16 md:py-24 relative z-10">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Playgroup", age: "1.5 - 2.5 years", emoji: "🎈" },
              { name: "Nursery", age: "2.5 - 3.5 years", emoji: "🌱" },
              { name: "LKG & UKG", age: "3.5 - 5 years", emoji: "📖" },
            ].map((program, idx) => (
              <div key={idx} className="bg-white card-child text-center hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4 animate-bounce-up">{program.emoji}</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {program.name}
                </h3>
                <p className="text-muted-foreground mb-4">{program.age}</p>
                <Link href="/programs">
                  <a className="text-primary hover:text-secondary font-semibold transition-colors">
                    Explore →
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16 md:py-24 relative z-10">
        <h2 className="section-title text-center mb-12">Why Choose Chiguru KIDS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "Expert Teachers", desc: "Qualified and caring educators" },
            { icon: Heart, title: "Safe Environment", desc: "Hygienic and secure facilities" },
            { icon: Lightbulb, title: "Play-Based Learning", desc: "Education through fun activities" },
            { icon: Star, title: "Individual Attention", desc: "Low student-teacher ratio" },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white card-child text-center animate-fade-in border" style={{ animationDelay: `${idx * 100}ms` }}>
                <Icon className="w-12 h-12 text-secondary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Activities Highlight */}
      <section className="bg-card py-16 md:py-24 relative z-10">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Art & Craft", emoji: "🎨" },
              { name: "Music & Dance", emoji: "🎵" },
              { name: "Storytelling", emoji: "📖" },
              { name: "Outdoor Play", emoji: "⚽" },
              { name: "Yoga", emoji: "🧘" },
              { name: "Celebrations", emoji: "🎉" },
            ].map((activity, idx) => (
              <div key={idx} className="bg-white border card-child text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-5xl mb-3 animate-sway">{activity.emoji}</div>
                <p className="font-bold text-primary">{activity.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/activities">
              <a className="btn-secondary inline-block">View All Activities</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16 md:py-24 relative z-10">
        <h2 className="section-title text-center mb-12">Parent Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              text: "Chiguru KIDS transformed my child's confidence. The teachers are wonderful and caring!",
              rating: 5,
            },
            {
              name: "Rajesh Kumar",
              text: "Best decision we made for our daughter. She loves going to school every day.",
              rating: 5,
            },
            {
              name: "Anjali Patel",
              text: "The play-based learning approach is excellent. My son has learned so much!",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="card-child animate-slide-up">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">{testimonial.text}</p>
              <p className="font-bold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative z-10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a campus visit and meet our team. We'd love to welcome your child!
          </p>
          <Link href="/contact">
            <a className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#558B2F] transition-all duration-300 shadow-lg hover:shadow-xl inline-block animate-bounce-up">
              Get in Touch Today
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
