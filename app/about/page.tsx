export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-black">Meet Kyle</h1>

      <img src="/about.png" alt="Kyle Schrock" width={250} height={350} className="mx-auto mb-6 rounded-lg shadow-lg" />

      <p className="text-lg text-black leading-relaxed mb-6">
        Kyle is a stand-up comedian known for their sharp wit, storytelling,
        and hilarious takes on everyday life. Based in Goshen, Indiana, he has started to make 
        a name for himself with his comedic storytelling and engaging stage presence.
      </p>

      <p className="text-lg text-black leading-relaxed mb-6">
        His comedy blends personal stories, quick punchlines, and clever social commentary.
        Whether on stage or online, Kyle delivers an unforgettable performance that keeps
        people laughing long after the show ends.
      </p>

      <p className="text-lg text-black leading-relaxed">
        When not performing, he's probably .
      </p>
    </section>
  );
}
