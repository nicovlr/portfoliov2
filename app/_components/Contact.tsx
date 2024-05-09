import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";


export const Contact = () => {
    return (
    <Section className="flex flex-col item-start gap-4">
        <Badge variant={"outline"}>Conntact me</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be happy to Work with you.
        </h2>
       <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
                    url="https://www.linkedin.com/in/nico-vlr123/"
                    name="nico.valerino@gmail.com" 
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabXFoEICWO-FBC2EgdtDBQPyvEWO3E_aMmBnNocBjyA&s"}
                    description={""}        
                    />

        <ContactCard
                    url="https://www.linkedin.com/in/nico-vlr123/"
                    name="nico"
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png"} 
                    description={""}        
                    />

        <ContactCard
                url="https://www.linkedin.com/in/nico-vlr123/"
                name="nico" 
                image={"https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1715212800&semt=ais_user"} 
                description={""}        />
       
       </div>
    </Section>
    

);
};