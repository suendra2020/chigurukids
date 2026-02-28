import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold font-bold mb-6">
            About Chiguru KIDS
          </h1>
          <p className="text-xl max-w-2xl">
            Dedicated to nurturing young minds with care, creativity, and compassion.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              To provide a safe, nurturing, and stimulating environment where every child can develop their unique potential through play-based learning and creative exploration.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We believe in fostering a love for learning while building strong foundations for academic and personal success.
            </p>
          </div>
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold font-bold text-primary mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              To be the leading preschool institution recognized for excellence in early childhood education and holistic child development.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We aim to create confident, curious, and compassionate learners ready to face the challenges of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center">Our Teaching Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Play-Based Learning",
                desc: "Learning through play is the foundation of our curriculum. Children explore, discover, and learn naturally.",
              },
              {
                title: "Child-Centric Approach",
                desc: "Every child is unique. We recognize individual differences and tailor our approach to each child's needs.",
              },
              {
                title: "Holistic Development",
                desc: "We focus on cognitive, emotional, social, and physical development to nurture well-rounded individuals.",
              },
            ].map((method, idx) => (
              <div key={idx} className="card-child bg-white border">
                <div className="text-4xl mb-4">
                  {idx === 0 ? "🎮" : idx === 1 ? "👧" : "🌟"}
                </div>
                <h3 className="text-2xl font-bold font-bold text-primary mb-4">
                  {method.title}
                </h3>
                <p className="text-foreground leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="container py-16 md:py-24">
        <h2 className="section-title text-center mb-12">Safety & Hygiene</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-up">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/classroom-learning-fZ3RwcDuNKidodsTugBiYc.webp"
              alt="Safe Environment"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="animate-slide-up">
            <ul className="space-y-4">
              {[
                "Regular health and safety audits",
                "CCTV surveillance in all areas",
                "Trained staff in first aid and CPR",
                "Strict hygiene protocols",
                "Safe and age-appropriate play equipment",
                "Nutritious and balanced meals",
                "Regular health check-ups",
                "Secure entry and exit procedures",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Qualified Teachers */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Qualified Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slide-up">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109691678/eXoyWF2XSbD2cYYJSaSfza/teacher-with-kids-4JiuBddHqswhkHPb3ahz4i.webp"
                alt="Teachers"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-slide-up">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Our team consists of experienced and certified educators who are passionate about early childhood development. Each teacher undergoes regular training and professional development.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Certified in early childhood education",
                  "Background-verified and trained",
                  "Patient and compassionate",
                  "Committed to individual child development",
                  "Regular professional development",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16 md:py-24">
        <h2 className="section-title text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: "❤️", value: "Care", desc: "We care deeply for every child" },
            { icon: "🌱", value: "Growth", desc: "We nurture holistic development" },
            { icon: "🤝", value: "Community", desc: "We build strong partnerships" },
            { icon: "✨", value: "Excellence", desc: "We strive for the best" },
          ].map((item, idx) => (
            <div key={idx} className="card-child text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold font-bold text-primary mb-2">
                {item.value}
              </h3>
              <p className="text-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
