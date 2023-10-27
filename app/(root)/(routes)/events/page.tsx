"use client";

import EventCard from './components/event-card';
import {Event} from "@prisma/client";
import axios from "axios";

const EventsPage = () => {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        axios.get("/api/events").then((response) => response.data).then((events) => {
            setEvents(events);
        }).catch((e) => console.error("Não foi possível carregar eventos"));
    }, []);

    return (
      <main>
        <h1 className="border-b-2 justify-start lg:ml-40 text-3xl font-extrabold text-gray-900 flex dark:text-white md:text-5xl lg:text-5xl">Todos os eventos!</h1>
        <div className='lg:mx-40 mt-12 grid flex-wrap xl:grid-cols-3 3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10 '>
          {events.map((event) => (
            <div key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
          </div>
      </main>
    );
}

EventsPage.displayName = "Events"

export default EventsPage;