export default function Activities() {
  const activities = [
    {
      name: "Art & Craft",
      emoji: "🎨",
      description: "Creative expression through painting, drawing, collage, and sculpture. Children explore colors, textures, and artistic techniques.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/art-craft-activity-nuqTgKghyq8mwxS6eToRkx.webp",
    },
    {
      name: "Dance & Music",
      emoji: "🎵",
      description: "Rhythmic movement and musical exploration. Children learn basic dance steps, play instruments, and develop coordination and rhythm.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/classroom-learning-fZ3RwcDuNKidodsTugBiYc.webp",
    },
    {
      name: "Storytelling",
      emoji: "📖",
      description: "Interactive storytelling sessions that develop listening skills and imagination. Children engage with stories through drama and discussion.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/teacher-with-kids-4JiuBddHqswhkHPb3ahz4i.webp",
    },
    {
      name: "Outdoor Play",
      emoji: "⚽",
      description: "Physical activities in a safe outdoor environment. Children develop gross motor skills through running, climbing, and playing games.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/outdoor-play-KEjCu7Hv4E6FNYSqkDc9pV.webp",
    },
    {
      name: "Festival Celebrations",
      emoji: "🎉",
      description: "Festive celebrations that teach cultural values and traditions. Children participate in themed activities and performances.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/hero-banner-NMRiv64vDDVGLPiHyn7YPn.webp",
    },
    {
      name: "Yoga for Kids",
      emoji: "🧘",
      description: "Age-appropriate yoga and mindfulness activities. Children learn relaxation techniques, breathing exercises, and body awareness.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/classroom-learning-fZ3RwcDuNKidodsTugBiYc.webp",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold font-bold mb-6">
            Our Activities
          </h1>
          <p className="text-xl max-w-2xl">
            Engaging activities that spark curiosity, creativity, and confidence.
          </p>
        </div>
      </section> */}

      {/* Activities Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="card-child overflow-hidden hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative h-64 overflow-hidden rounded-xl mb-4">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{activity.emoji}</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-bold text-primary mb-3">
                {activity.name}
              </h3>
              <p className="text-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">Benefits of Our Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cognitive Development",
                items: [
                  "Problem-solving skills",
                  "Creativity and imagination",
                  "Language development",
                  "Learning through play",
                ],
              },
              {
                title: "Physical Development",
                items: [
                  "Gross motor skills",
                  "Fine motor skills",
                  "Coordination and balance",
                  "Physical fitness",
                ],
              },
              {
                title: "Social & Emotional",
                items: [
                  "Teamwork and cooperation",
                  "Confidence building",
                  "Emotional expression",
                  "Friendship skills",
                ],
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold font-bold text-primary mb-6">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-secondary rounded-full"></span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Schedule */}
      <section className="container py-16 md:py-24">
        <h2 className="section-title text-center mb-12">Weekly Activity Schedule</h2>
        <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-bold font-bold">Day</th>
                  <th className="px-6 py-4 text-left font-bold font-bold">Morning Activity</th>
                  <th className="px-6 py-4 text-left font-bold font-bold">Afternoon Activity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: "Monday", morning: "Art & Craft", afternoon: "Outdoor Play" },
                  { day: "Tuesday", morning: "Music & Dance", afternoon: "Storytelling" },
                  { day: "Wednesday", morning: "Yoga & Mindfulness", afternoon: "Art & Craft" },
                  { day: "Thursday", morning: "Outdoor Play", afternoon: "Music & Dance" },
                  { day: "Friday", morning: "Storytelling", afternoon: "Festival Celebrations" },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-muted"}
                  >
                    <td className="px-6 py-4 font-bold font-bold text-primary">
                      {row.day}
                    </td>
                    <td className="px-6 py-4 text-foreground">{row.morning}</td>
                    <td className="px-6 py-4 text-foreground">{row.afternoon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
