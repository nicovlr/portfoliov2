import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  name: string;
  description: string;
  url?: string;
}) => {
  return (
    <Link href={props.name} className="w-full">
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-color group flex items-center gap-4">
      <div className="relative">
        <img src={props.image} 
        alt={props.name} 
        className="w-10 h-10 rounded-full object-contain" />
      </div>
      <div className="mr auto">
        <div className="items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
      </div>

      <p className="text-lg font-semibold">{props.description}</p>

      <div className="flex">
      </div>
      <ArrowUpRight 
      className= "group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" 
      size={16} />
    </Card>

    </Link>
  );
};
