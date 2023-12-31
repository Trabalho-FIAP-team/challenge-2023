"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay, History} from 'swiper/modules';
import {SectionHeader, SectionSubtitle, SectionTitle} from "@/components/ui/section";
import EventCard from "@/app/(root)/(routes)/events/components/event-card";
import {useEffect, useState} from "react";
import {Event} from "@prisma/client";
import axios from "axios";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const autoplayOptions = {
    delay: 5000,
    disableOnInteraction: true
};

const Events = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        axios.get("/api/events").then((response) => response.data).then((events) => {
            setEvents(events);
        }).catch((e) => console.error("Não foi possível carregar eventos"));
    }, []);

    return (
        <section className={cn("", className)} ref={ref}>

            <SectionHeader variant={"center"}>
                <SectionTitle>Eventos em Destaque!</SectionTitle>
                <SectionSubtitle>O que esperar nos próximos meses</SectionSubtitle>
            </SectionHeader>

            <Swiper spaceBetween={50}
                    slidesPerView={4}
                    pagination={{clickable: true}}
                    autoplay={autoplayOptions}
                    modules={[Autoplay, Pagination, Scrollbar, A11y, History]}
                    className="!pb-12"
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            330: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            350: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            360: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            390: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            976: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 50
                            }
                        }
                    }
                /* onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}*/>

                {events.slice(0, 6).map((event, index) => (
                    <SwiperSlide className="!h-auto mt-6" key={index}>
                        <EventCard event={event}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
})

Events.displayName = "Events"

export default Events;