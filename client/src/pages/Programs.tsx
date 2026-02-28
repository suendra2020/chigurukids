export default function Programs() {
  const programs = [
    {
      name: "Playgroup",
      age: "1.5 - 2.5 years",
      emoji: "🎈",
      color: "bg-orange-100",
      features: [
        "Social interaction and peer bonding",
        "Motor skill development",
        "Sensory exploration",
        "Music and movement",
        "Safe play environment",
      ],
      description: "Our Playgroup program focuses on developing social skills and gross motor abilities through guided play activities. Children learn to interact with peers while exploring their environment safely.",
    },
    {
      name: "Nursery",
      age: "2.5 - 3.5 years",
      emoji: "📚",
      color: "bg-green-100",
      features: [
        "Early literacy introduction",
        "Rhymes and storytelling",
        "Sensory activities",
        "Fine motor skill development",
        "Language enrichment",
      ],
      description: "Nursery introduces children to basic literacy concepts through stories, rhymes, and songs. We emphasize language development and fine motor skills through creative activities.",
    },
    {
      name: "Lower Kindergarten (LKG)",
      age: "3.5 - 4.5 years",
      emoji: "✏️",
      color: "bg-blue-100",
      features: [
        "Basic reading and writing",
        "Number recognition",
        "Phonics introduction",
        "Art and craft",
        "Social studies basics",
      ],
      description: "LKG prepares children for formal schooling with introduction to letters, numbers, and basic academic concepts. We maintain a play-based approach while introducing structured learning.",
    },
    {
      name: "Upper Kindergarten (UKG)",
      age: "4.5 - 5 years",
      emoji: "🎓",
      color: "bg-purple-100",
      features: [
        "Advanced reading and writing",
        "Mathematics concepts",
        "Science exploration",
        "School readiness skills",
        "Leadership development",
      ],
      description: "UKG focuses on school readiness with advanced academics, independence skills, and confidence building. Children are prepared for primary school with strong foundational knowledge.",
    },
    {
      name: "Daycare",
      age: "1.5 - 5 years",
      emoji: "🌙",
      color: "bg-yellow-100",
      features: [
        "Extended care hours",
        "Nutritious meals and snacks",
        "Nap time facilities",
        "Evening activities",
        "Flexible scheduling",
      ],
      description: "Our Daycare service provides extended care for working parents. Children enjoy all regular activities plus additional care, meals, and a comfortable rest area.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl max-w-2xl">
            Comprehensive programs tailored for every stage of early childhood development.
          </p>
        </div>
      </section> */}

      {/* Programs Grid */}
      <section className="container py-16 md:py-24">
        <div className="space-y-12">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-slide-up"
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{program.emoji}</div>
                      <div>
                        <h2 className="text-4xl font-bold font-bold text-primary">
                          {program.name}
                        </h2>
                        <p className="text-lg text-muted-foreground">{program.age}</p>
                      </div>
                    </div>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <h3 className="text-xl font-bold font-bold text-primary mb-4">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${program.color} rounded-2xl p-8 h-96 flex items-center justify-center shadow-lg`}>
                    <div className="text-9xl opacity-50">{program.emoji}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`${program.color} rounded-2xl p-8 h-96 flex items-center justify-center shadow-lg`}>
                    <div className="text-9xl opacity-50">{program.emoji}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{program.emoji}</div>
                      <div>
                        <h2 className="text-4xl font-bold font-bold text-primary">
                          {program.name}
                        </h2>
                        <p className="text-lg text-muted-foreground">{program.age}</p>
                      </div>
                    </div>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <h3 className="text-xl font-bold font-bold text-primary mb-4">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Academics",
                items: ["Language & Literacy", "Mathematics", "Science Exploration", "Social Studies"],
              },
              {
                title: "Creative Arts",
                items: ["Art & Craft", "Music & Dance", "Drama", "Creative Expression"],
              },
              {
                title: "Life Skills",
                items: ["Self-Care", "Social Skills", "Emotional Intelligence", "Independence"],
              },
            ].map((category, idx) => (
              <div key={idx} className="card-child">
                <h3 className="text-2xl font-bold font-bold text-primary mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
