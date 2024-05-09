import { Code } from "./Code";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./Section";


export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]flex flex-col gap-2">
            <h2 className="font-caption text-5xl text primary">
                Nico,
            </h2>
            <h3 className="text-3xl font-caption">
                student developer
            </h3>
            <p>
            Looking for professional experience and with a thirst to learn new things.
            I living in <Code>France</Code>
            </p>
        </div>
        <div className="flex-1"> 
        </div>
    </Section>

}

