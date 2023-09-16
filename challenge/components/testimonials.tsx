"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { testimonials } from "@/data";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const autoplayOptions = {
    delay:5000,
    disableOnInteraction:true
};

const Testimonials = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div className={cn("", className)}>
        <Swiper  spaceBetween={50}
                 slidesPerView={3}
                 pagination={{ clickable: true }}
                 autoplay={autoplayOptions}
                 modules={[Autoplay, Pagination, Scrollbar, A11y]}
                /* onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}*/>

            { testimonials.map((testimonial, index) => (
                <SwiperSlide>
                    <Card>
                        <CardHeader>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardTitle>{testimonial.name}</CardTitle>
                            <CardDescription className="text-green-600 font-semibold">{testimonial.role}, {testimonial.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {testimonial.text}
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
))

export default Testimonials;