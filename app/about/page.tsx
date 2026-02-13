import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-black text-center">
        Meet Kyle
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Left */}
        <div className="flex-1 text-black text-lg leading-relaxed space-y-6 text-left">
          <p>
            Kyle Schrock is a certified auto mechanic, full-time college
            professor, and part-time comedian — though depending on the day,
            those roles occasionally blend together.
          </p>

          <p>
            After years of fixing engines and grading papers, Kyle decided to
            try fixing something even more unpredictable: a room full of
            strangers. Just over a year ago he dove into comedy, winning the
            Funny Over 40 contest at the Underground Laugh Lounge in Niles,
            Michigan.
          </p>

          <p>
            Kyle&apos;s comedy draws from everyday life — marriage, parenting,
            adventure, and the constant balancing act of adulthood. Whether
            he&apos;s comparing family life to a diagnostic nightmare or
            reflecting on the humor hidden inside life&apos;s chaos, his goal is
            simple: make life&apos;s struggles a little lighter and a lot more
            entertaining.
          </p>
        </div>

        {/* Image Right */}
        <div className="flex-shrink-0">
          <Image
            src="/about.png"
            alt="Kyle Schrock"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
