import Link from "next/link";

const VIDEOS = [
  { id: "AeSIZixD2BI", title: "Comedy Clip 1" },
  { id: "_vrq0xzKbm0", title: "Comedy Clip 2" },
  { id: "5sXa_73j2bc", title: "Comedy Clip 3" },
  { id: "F6hEzg3rF3I", title: "Comedy Clip 4" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            Kyle Schrock
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium" style={{ color: 'rgba(61, 61, 61, 1)' }}>
            Stand-up comedian
          </p>
          <p className="mt-2 max-w-xl mx-auto" style={{ color: 'rgba(61, 61, 61, 1)' }}>
            Marriage, parenting, and the chaos of everyday life — served with a laugh.
          </p>
          <Link
            href="/events"
            className="inline-block mt-8 px-8 py-3 hover:bg-amber-400 text-black font-semibold rounded-lg transition"
            style={{ backgroundColor: 'rgba(223, 228, 144, 1)', color: 'rgba(0, 0, 0, 1)' }}
          >
            See Upcoming Shows
          </Link>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 px-4 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-2 text-center">
            Watch
          </h2>
          <p className="text-center mb-12" style={{ color: 'rgba(61, 61, 61, 1)' }}>
            Recent clips from the stage
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.id} className="group">
                <div className="aspect-video rounded-lg overflow-hidden bg-neutral-800 shadow-lg group-hover:shadow-xl transition">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="text-black hover:text-amber-300 font-medium transition"
            >
              Learn more about Kyle →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
