'use client';
import Image from 'next/image';
import NavItem from '@/components/layout/NavItem';
import { useState, useRef, useEffect } from 'react';
import { Bars4Icon, XMarkIcon, UserIcon, WindowIcon, CommandLineIcon, CodeBracketIcon, BanknotesIcon} from '@heroicons/react/24/solid';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest(".dropdown-item")
            ) {
                setDropdownOpen(false);
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav id="header" className="navbar">
            {/* Desktop Navbar */}
            <div className="relative flex container items-center justify-between h-16 mt-3 mx-auto">
                <a href="/" className="flex z-40 items-center"><Image src="/images/banner.webp" alt="SanoServers" width="300" height="180" /> {/* 360x180 */}</a>

                {/* Mobile Burger Menu */}
                <button className="lg:hidden text-white z-50 absolute right-4 items-center" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XMarkIcon className="size-8" /> : <Bars4Icon className="size-8" />}
                </button>

                <div className="hidden md:hidden lg:flex items-center space-x-0 md:space-x-0 lg:space-x-8 xl:space-x-16 absolute left-1/2 transform -translate-x-1/2 mt-3 text-lg">
                    <NavItem href='/' label='Home' />
                    <NavItem href='/about' label='About' />
                    <NavItem href='#' label='Cloud' className="line-through" />
                    <NavItem href='/gameservers' label='Game Servers' />
                    <NavItem href='/webhosting' label='Web Hosting' />
                </div>
                
                <div className="hidden md:hidden lg:flex items-center ml-auto gap-3">
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="border border-borders hover:bg-accent hover:text-white py-2 px-4 rounded-full text-white hover:cursor-pointer mr-4"><WindowIcon className="size-5 inline" /> Control Panels</button>

                        {dropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-background border border-borders rounded-lg shadow-lg">
                            <a href="https://billing.sanoservers.com" className="block px-4 py-2 text-white hover:bg-accent hover:text-white rounded-t-md"><BanknotesIcon className="size-5 inline" /> Billing</a>
                            <a href="https://panel.sanoservers.com" className="block px-4 py-2 text-white hover:bg-accent hover:text-white rounded-t-md"><CommandLineIcon className="size-5 inline" /> Game Panels</a>
                            <a href="https://lv-shared04.dapanel.net:2222/evo/" className="block px-4 py-2 text-white hover:bg-accent hover:text-white rounded-b-md"><CodeBracketIcon className="size-5 inline" /> Web Panel</a>
                        </div>
                        )}
                    </div>
                </div>
            </div>
                
            {/* Mobile Nav */}
            {isOpen && (
            <div className="lg:hidden absolute top-0 w-full">
                <div className="bg-background w-full text-lg p-5 space-y-2 rounded-b-md pt-24"> 
                    <NavItem href='/' label='Home' closeMenu={closeMenu} />
                    <NavItem href='/about' label='About' closeMenu={closeMenu} />
                    <NavItem href='#' label='Cloud' className="line-through" closeMenu={closeMenu} />
                    <NavItem href='/gameservers' label='Game Servers' closeMenu={closeMenu} />
                    <NavItem href='/webhosting' label='Web Hosting' closeMenu={closeMenu} />
                    <hr className="border border-borders mb-5" />
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="border border-borders hover:bg-accent hover:text-white p-2 rounded-md text-white text-left hover:cursor-pointer w-full"><WindowIcon className="size-5 inline" /> Control Panels</button>
               
                    {dropdownOpen && (
                        <div className="relative">
                            <div className="absolute left-0 mt-2 w-full mx-auto bg-background border border-borders rounded-lg shadow-lg z-40">
                                <a href="https://billing.sanoservers.com" className="block px-4 py-2 text-white hover:bg-accent hover:text-white rounded-t-md"><BanknotesIcon className="size-5 inline" /> Billing</a>
                                <a href="https://panel.sanoservers.com" className="dropdown-item block px-4 py-2 text-white hover:bg-accent hover:text-white rounded-t-md z-50"><CommandLineIcon className="size-5 inline" /> Game Panel</a>
                                <a href="https://lv-shared04.dapanel.net:2222/evo/" className="dropdown-item block px-4 py-2 text-white hover:bg-accent hover:text-white rounded-b-md"><CodeBracketIcon className="size-5 inline" /> Web Panel</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            )}
        </nav>
    );
}