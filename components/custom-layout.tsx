'use client';
import { ReactNode } from "react";

export default function CustomLayout({ children }: { children: ReactNode }) {
    return (
        <main className={"max-h-screen w-full"}>
            {children}
        </main>
    )
}