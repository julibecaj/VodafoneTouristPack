import Header from "../components/Header";
import Footer from "../components/Footer";
import PackCard from "../components/PackCard";
import { ActivationStep } from "@/components/ActivationStep";

const activationSteps = [
  {
    number: "1",
    title: "Choose Pack",
    text: "Select the tourist pack that fits your needs",
  },
  {
    number: "2",
    title: "Click Activate",
    text: "Press the activate button on your chosen pack",
  },
  {
    number: "3",
    title: "Start Using",
    text: "Your pack is ready to use immediately",
  },
];

const packs = [
  {
    title: "Basic Pack",
    subtitle: "Perfect for short visits",
    price: "500 L",
    duration: "3 days",
    features: ["2GB Data", "50 Minutes", "100 SMS"],
  },
  {
    title: "Standard Pack",
    subtitle: "Great for week-long stays",
    price: "1000 L",
    duration: "7 days",
    features: ["5GB Data", "100 Minutes", "Unlimited SMS"],
  },
  /**teste */
  {
     title: "Standard Pack",
    subtitle: "Great for week-long stays",
    price: "1000 L",
    duration: "7 days",
    features: ["5GB Data", "100 Minutes", "Unlimited SMS"],
  },
  {
    title: "Standard Pack",
    subtitle: "Great for week-long stays",
    price: "1000 L",
    duration: "7 days",
    features: ["5GB Data", "100 Minutes", "Unlimited SMS"], 
  },
  
];

export default function HomePage() {
  return (
    <div className="page">
      

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Welcome to Vodafone Albania</h1>
          <p className="hero-text">
            Stay connected during your visit to Albania with our special tourist
            packages. Choose the perfect plan for your needs.
          </p>
        </section>

        {/* Packs Section */}
        <section>
          <h2 className="section-title">Tourist Packs</h2>
          <div className="pack-grid">
            {packs.map((pack, index) => (
              <PackCard
                key={index}
                title={pack.title}
                subtitle={pack.subtitle}
                price={pack.price}
                duration={pack.duration}
                features={pack.features}
              />
            ))}
          </div>
        </section>

        {/* How to Activate Section */}
        <h2 className="section-title">How to Activate</h2>
        <div className="steps">
          {activationSteps.map((step, index) => (
            <ActivationStep
              key={index}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </main>

      
    </div>
  );
}
