import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/hero-banner-NMRiv64vDDVGLPiHyn7YPn.webp",
      title: "Kids Playing Together",
      category: "Activities",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/classroom-learning-fZ3RwcDuNKidodsTugBiYc.webp",
      title: "Classroom Learning",
      category: "Learning",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/art-craft-activity-nuqTgKghyq8mwxS6eToRkx.webp",
      title: "Art & Craft Session",
      category: "Activities",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/teacher-with-kids-4JiuBddHqswhkHPb3ahz4i.webp",
      title: "Storytelling Time",
      category: "Learning",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/outdoor-play-KEjCu7Hv4E6FNYSqkDc9pV.webp",
      title: "Outdoor Play",
      category: "Activities",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/classroom-learning-fZ3RwcDuNKidodsTugBiYc.webp",
      title: "Group Activities",
      category: "Events",
    },
  ];

  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Preschool Activities Highlight",
      description: "A day in the life at Chiguru KIDS",
    },
    {
      id: "jNQXAC9IVRw",
      title: "Learning Through Play",
      description: "How we make education fun",
    },
    {
      id: "9bZkp7q19f0",
      title: "Our Facilities Tour",
      description: "Explore our modern preschool",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl max-w-2xl">
            Explore moments of joy, learning, and growth at Chiguru KIDS.
          </p>
        </div>
      </section> */}

      {/* Photo Gallery */}
      <section className="container py-16 md:py-24">
        <h2 className="section-title text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold font-bold">{image.title}</h3>
                <p className="text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Video Gallery */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <div key={idx} className="card-child">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-black flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold font-bold text-primary mb-2">
                  {video.title}
                </h3>
                <p className="text-foreground text-sm">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="container py-16 md:py-24">
        <h2 className="section-title text-center mb-12">Events & Celebrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Annual Day",
              description: "Celebrating the achievements and talents of our students with performances and exhibitions.",
              emoji: "🎭",
            },
            {
              title: "Sports Day",
              description: "Fun-filled day with various sports activities, races, and team competitions.",
              emoji: "🏃",
            },
            {
              title: "Festivals",
              description: "Celebrating cultural diversity through themed activities and traditional celebrations.",
              emoji: "🎉",
            },
            {
              title: "Parent-Child Events",
              description: "Special bonding activities where parents participate in school activities with their children.",
              emoji: "👨‍👩‍👧‍👦",
            },
          ].map((event, idx) => (
            <div key={idx} className="card-child">
              <div className="text-5xl mb-4">{event.emoji}</div>
              <h3 className="text-2xl font-bold font-bold text-primary mb-3">
                {event.title}
              </h3>
              <p className="text-foreground leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
