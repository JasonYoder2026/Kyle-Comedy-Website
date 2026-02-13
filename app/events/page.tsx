import Image from "next/image";
import Link from "next/link";

type Event = {
  id: string
  title: string
  date: string
  time: string
  image?: string
  link?: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Funny Pharm",
    date: "May 22, 2026",
    time: "7:30 PM",
    link: "https://www.funnypharmcomedy.com/shows"
  },
  {
    id: "2",
    title: "Funny Pharm",
    date: "May 23, 2026",
    time: "7:30 PM",
    link: "https://www.funnypharmcomedy.com/shows"
  },
]

function EventCard({ event }: { event: Event }) {
  const CardContent = (
    <div className="bg-amber-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={'/posters/placeholder.png'}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-black mb-2">
          {event.title}
        </h3>
        <p className="text-gray-700">
          {event.date}
        </p>
        <p className="text-gray-700">
          {event.time}
        </p>
      </div>
    </div>
  )
  return event.link ? (
    <Link href={event.link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </Link>
  ) : (
    CardContent
  )
}


export default function EventsPage() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-black text-center">
        Upcoming Gigs
      </h1>

      {events.length === 0 ? (
        <p className="text-lg text-black text-center">
          Kyle has no upcoming shows right now, check back later.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
