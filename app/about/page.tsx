export const metadata = {
  title: "About Us | Demeter Seed",
};

export default function AboutPage() {
  return (
    <section className="pt-20 pb-12 px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-600 mb-3">
            About Demeter Seed
          </h1>
          <p className="text-gray-300">
            Producing certified quality seed for Malawi’s farmers.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>

          <p className="text-gray-200 leading-relaxed mb-4">
            Demeter Seed Malawi was established in 2004 and has grown into a
            fully certified and integrated seed company dedicated to producing
            high-quality certified seed varieties that support Malawi’s
            agricultural sector.
          </p>

          <p className="text-gray-200 leading-relaxed mb-4">
            Our core products include both open-pollinated and hybrid maize
            varieties, as well as a range of legumes such as groundnuts,
            soybeans, cowpeas, and pigeon peas. All seed is produced under
            strict quality control standards.
          </p>

          <p className="text-gray-200 leading-relaxed mb-4">
            Seed production is carried out on Demeter Seed’s own farms and
            through carefully selected out-grower farmers. All seed is
            government certified, processed, treated, and packed at our facility
            in Lilongwe before distribution.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Demeter Seed is part of the Farmers World Group of companies and is
            regionally linked through the Meridian Group. Our guiding belief
            remains simple and firm:
            <span className="text-cyan-400 font-semibold">
              {" "}
              It starts with the seed.
            </span>
          </p>
        </div>

        {/* Vision & Commitment */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Vision & Commitment
          </h2>

          <p className="text-gray-200 leading-relaxed mb-4">
            Our vision is to contribute to food security and improved
            livelihoods in Malawi by ensuring farmers have access to reliable,
            high-yielding, and certified seed varieties.
          </p>

          <p className="text-gray-200 leading-relaxed mb-4">
            Through strong partnerships with agro-dealers and extension services
            across the country, we work to make quality seed available when and
            where farmers need it.
          </p>

          <p className="text-gray-200 leading-relaxed">
            We remain committed to innovation, quality assurance, and continuous
            improvement in seed production — because good harvests begin with
            good seed.
          </p>
        </div>
      </div>
    </section>
  );
}
