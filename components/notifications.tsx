"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Bell, CalendarDays, SeparatorHorizontal, Settings, ShieldAlert} from "lucide-react";
import {Card, CardDescription, CardHeader, CardIcon, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import axios from "axios";
import {Notification, Event} from "@/types";
import {Badge} from "@/components/ui/badge";

export function Notifications() {

    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        axios.get<Event[]>('/api/events?subscribed').then(response => {
            if (response.status != 200) {
                return setNotifications([{ icon: <ShieldAlert className="h-5 w-5"></ShieldAlert>, title: 'Erro', description: 'Não foi possível carregar notificações'}]);
            }

            setNotifications(response.data.map(event => ({ icon: <CalendarDays className="h-5 w-5"></CalendarDays>, title: 'Evento se aproximando!', description: event.eventTitle})));
        });
    }, []);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="relative">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Badge variant="default" value={notifications.length}></Badge>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] overflow-y-auto pb-1 mb-1  flex flex-col">

                <div className="py-2 flex flex-row items-center justify-between w-full p-1.5">
                    <h2 className="text-lg">Suas notificações ({notifications.length})</h2>
                    <Button variant="secondary" size="icon" className="">
                        <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                        <span className="sr-only">Notification Settings</span>
                    </Button>
                </div>

                <div className="uppercase tracking-wider text-muted-foreground">
                    Hoje
                </div>

                <ul className="w-full p-1 space-y-3 max-h-[400px] ">
                    {notifications.map((notification, index) => (
                        <li className="last:pb-3">
                            <Card className="p-3.5 space-y-2">
                                <CardHeader className="!p-0 items-center flex flex-row justify-start gap-2">
                                    <CardIcon className="text-lime-600 !w-min !h-min">
                                        {notification.icon}
                                    </CardIcon>
                                    <CardTitle className="!ml-0 !mt-0 text-base font-medium">
                                        {notification.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardDescription className="">
                                    {notification.description}
                                </CardDescription>
                            </Card>
                        </li>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    )
}
