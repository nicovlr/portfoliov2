import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SideProject, WORKS, Work } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { SIDE_PROJECTS } from "./Status";


export const Status = () => {
  return (

    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Fun project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/" />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full p-4 flex flex-col gap-4">
        <Card className="p-4 flex">
          <p className="text-lg text-muted-foreground">School</p>
          <div className="flex flex-col gap-4">

            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foregrund">Contact me</p>
          <ContactCard
                    url="https://www.linkedin.com/in/nico-vlr123/"
                    name="nico.valerino@gmail.com" 
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png"}
                    description={""}        
                    />

          
        </Card>
      </div>
    </Section>
  );
};
