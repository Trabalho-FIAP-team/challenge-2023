import EventCard from './components/event-card';
import { events } from '@/data'

const EventsPage = () => {
    return (
      <main>
        <h1 className="border-b-2 justify-start lg:ml-40 text-3xl font-extrabold text-gray-900 flex dark:text-white md:text-5xl lg:text-5xl">Todos os eventos!</h1>
        <div className='lg:mx-40 mt-12 grid flex-wrap xl:grid-cols-3 3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10 '>
          {events.map((event) => (
            <div key={event.eventId}>
              <EventCard event={event} />
            </div>
          ))}
          </div>
      </main>
    );
}

EventsPage.displayName = "Events"

export default EventsPage;