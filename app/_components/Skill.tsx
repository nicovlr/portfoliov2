import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { SwiftLogo } from "./icons/SwiftLogo";

export const Skills = () => {
    return <Section className="flex flex-col item-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I Work on
        </h2>
       <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-4">
                <ReactLogo size={42} 
                className="animate-spin"
                style={{animationDuration:"10s"

                }}/>

            
              <h3 className="text-2xl font-semibold tracking-tight mb-2">React</h3>
              <p className="text-sm text-muted-foreground">my main framework is <Code>React</Code>. I also <Code>Next.js</Code> 
              as backend and frontend 
              framework.
            </p>
          </div>

          <div className="flex flex-col gap-4">
                <TailwindLogo size={42} 
                />

            
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Tailwind</h3>
              <p className="text-sm text-muted-foreground">I can create application in seconds using<Code>Tailwind</Code>
            </p>
          </div>

          <div className="flex flex-col gap-4">
                <SwiftLogo size={42} 
                />

            
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Swift</h3>
              <p className="text-sm text-muted-foreground">I've been using <Code>Swift</Code> since May for native <Code>iOS</Code> development.
            </p>
          </div>

       </div>
    </Section>
};