import { destinations } from "@/lib/data";

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore iconic destinations around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative h-64 rounded overflow-hidden cursor-pointer group border border-gray-800"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-xs text-gray-300">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
