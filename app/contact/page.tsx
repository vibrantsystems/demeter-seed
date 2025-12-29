import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Demeter Seed",
};

export default function ContactPage() {
  return (
    <section className="pt-20 pb-12 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-600 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300">
            Get in touch with Demeter Seed. We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl mt-1" />
              <div>
                <h2 className="font-semibold text-white">Office & Warehouse</h2>
                <p className="text-gray-300">
                  Demeter Seed
                  <br />
                  P.O. Box 1631, Lilongwe, Malawi
                  <br />
                  Kaunda Road, Area 51
                  <br />
                  Opposite Kanengo Police Station
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-cyan-400 text-xl mt-1" />
              <div>
                <h2 className="font-semibold text-white">Telephone</h2>
                <p className="text-gray-300">
                  +265 1 710 941 437
                  <br />
                  +265 886 061 179
                  <br />
                  +265 996 965 872
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-cyan-400 text-xl mt-1" />
              <div>
                <h2 className="font-semibold text-white">Email</h2>
                <p className="text-gray-300">info@demeterseed.mw</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 text-cyan-400 text-xl">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 md:ml-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Link */}
        <div className="text-center">
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Kaunda+Road+Area+51+Lilongwe+Malawi"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            View on Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}
