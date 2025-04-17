"use client";
import React, {useMemo, useState} from 'react';
import { CheckBadgeIcon, ExclamationCircleIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface GameListProps {
    data?: Record<string, any>[];
}

export default function GameList({ data }: GameListProps) {
    if (!data?.length) return <p className="text-center text-red-400">No data available</p>;

    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState("all");

    const filteredData = useMemo(() => {
        const query = searchQuery.toLowerCase();
    
        return data?.filter(({ name, tags = [], altNames = "", price }) => {
            const matchesQuery = [name, ...tags, altNames].some((text) =>
                text.toLowerCase().includes(query)
            );
    
            if (!matchesQuery) return false;
    
            switch (filterType) {
                case "free":
                    return price === 0;
                case "premium":
                    return price > 0;
                case "popular":
                    return tags.map((t: string) => t.toLowerCase()).includes("popular");
                case "sandbox":
                    return tags.map((t: string) => t.toLowerCase()).includes("sandbox");
                case "shooter":
                    return tags.map((t: string) => t.toLowerCase()).includes("shooter");
                default:
                    return true;
            }
        });
    }, [searchQuery, data, filterType]);

    const icons: Record<string, React.ElementType> = {
        FaceSmileIcon: FaceSmileIcon,
        CheckBadgeIcon: CheckBadgeIcon,
        ExclamationCircleIcon: ExclamationCircleIcon,
    };

    return (
        <div className="space-y-6">
            <input
                type="text"
                placeholder="Search for a game..."
                className="w-full md:w-1/2 bg-background text-white p-3 rounded-md border-2 border-borders"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
*
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 place-self-center">
                <button onClick={() => setFilterType("all")} className={`text-white px-4 py-2 rounded-md hover:bg-accentDark transition duration-300 ${filterType === "all" ? "bg-accent" : "bg-background text-white border border-borders"}`}>All</button>
                <button onClick={() => setFilterType("free")} className={`text-white px-4 py-2 rounded-md hover:bg-accentDark transition duration-300 ${filterType === "free" ? "bg-accent" : "bg-background text-white border border-borders"}`}>Free</button>
                <button onClick={() => setFilterType("premium")} className={`text-white px-4 py-2 rounded-md hover:bg-accentDark transition duration-300 ${filterType === "premium" ? "bg-accent" : "bg-background text-white border border-borders"}`}>Premium</button>
                <button onClick={() => setFilterType("popular")} className={`text-white px-4 py-2 rounded-md hover:bg-accentDark transition duration-300 ${filterType === "popular" ? "bg-accent" : "bg-background text-white border border-borders"}`}>Popular</button>
                <button onClick={() => setFilterType("sandbox")} className={`text-white px-4 py-2 rounded-md hover:bg-accentDark transition duration-300 ${filterType === "sandbox" ? "bg-accent" : "bg-background text-white border border-borders"}`}>Sandbox</button>
                <button onClick={() => setFilterType("shooter")} className={`text-white px-4 py-2 rounded-md hover:bg-accentDark transition duration-300 ${filterType === "shooter" ? "bg-accent" : "bg-background text-white border border-borders"}`}>Shooter</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-left text-white pt-5">
                {filteredData.map(({ name, link, image, price, badge }, index) => {
                    const IconComponent = badge ? icons[badge.icon] : null;

                    return (
                        <a key={index} href={link} className="flex flex-col group hover:cursor-pointer relative mx-auto" aria-label={`View details for ${name}`}>
                            {badge && (
                                <span className={`gameBadge ${badge.color} flex items-center gap-1`}>
                                    {IconComponent && <IconComponent className="w-5 h-5" />}
                                    {badge.text}
                                </span>
                            )}
                            <Image src={image} alt={name} width={236} height={352} className="gameIcon" />
                            <h1 className="text-white font-bold text-lg pt-2 text-center md:text-left">{name}</h1>
                                
                            {price === 0 ? (
                                <span className="text-muted text-center md:text-left">Free</span>
                            ) : (
                                <span className="text-muted text-center md:text-left">Starting at <strong>${price}</strong> </span>
                            )}
                        </a>
                    );
                })}
            </div>
            
        </div>
    );
}