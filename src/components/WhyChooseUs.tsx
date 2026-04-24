import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Pravas
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Committed to unforgettable travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 rounded p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
