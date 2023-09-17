"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay, History  } from 'swiper/modules';

import { testimonials } from "@/data";
import { getNameInitials } from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {SectionHeader, SectionSubtitle, SectionTitle} from "@/components/ui/section";

const autoplayOptions = {
    delay:5000,
    disableOnInteraction:true
};

const Testimonials = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <section className={cn("", className)}>

        <SectionHeader variant={"center"}>
            <SectionTitle>Depoimentos</SectionTitle>
            <SectionSubtitle>A Ideologia que Impulsiona Nossa Empresa</SectionSubtitle>
        </SectionHeader>

        <Swiper  spaceBetween={50}
                 slidesPerView={4}
                 pagination={{ clickable: true }}
                 autoplay={autoplayOptions}
                 modules={[Autoplay, Pagination, Scrollbar, A11y, History ]}
                 className="!pb-12"
                /* onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}*/>

            { testimonials.map((testimonial, index) => (
                <SwiperSlide className="!h-auto" key={index}>
                    <Card className="h-full bg-muted-foreground/10">
                        <CardHeader>
                            <Avatar>
                                <AvatarImage src={testimonial.authorImage} />
                                <AvatarFallback>{getNameInitials(testimonial.name)}</AvatarFallback>
                            </Avatar>
                            <CardTitle>{testimonial.name}</CardTitle>
                            <CardDescription className="text-lime-600 font-semibold">{testimonial.role}, {testimonial.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-gray-500 dark:text-gray-400 italic">
                            "{testimonial.text}"
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
))

export default Testimonials;