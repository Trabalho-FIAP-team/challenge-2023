import {PageProps} from "@/lib/types";

const EventIdPage = ({ params, searchParams }: PageProps)  => {

    const eventId = params['eventId'];

    return (
        <>
            {eventId}
        </>
    );
}

export default EventIdPage;