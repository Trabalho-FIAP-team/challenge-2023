
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay, History } from 'swiper/modules';

import { events } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SectionHeader, SectionSubtitle, SectionTitle } from "@/components/ui/section";
import EventCard from "@/app/(root)/(routes)/events/components/event-card";

const autoplayOptions = {
    delay: 5000,
    disableOnInteraction: true
};

const Events = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <section className={cn("", className)} ref={ref}>

        <SectionHeader variant={"center"}>
            <SectionTitle>Eventos em Destaque!</SectionTitle>
            <SectionSubtitle>O que esperar nos próximos meses</SectionSubtitle>
        </SectionHeader>

        <Swiper spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={autoplayOptions}
            modules={[Autoplay, Pagination, Scrollbar, A11y, History]}
            className="!pb-12"
            breakpoints={
                {
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 50
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50
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
                    <EventCard event={event} />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
))

Events.displayName = "Events"

export default Events;