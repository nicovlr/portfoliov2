import { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const SideProject = (props: SideProjectProps) => {
  return (
    <Link href={props.url} 
    className="inline-flex intems-center gap-4 hover bg-accent/50 tansition-colors p-1 rounded">
      <span className="bg-accent text-accent-forground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
export const WORKS: WorkProps[] = [
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/1/14/CNED_Logo_2017_RGB_Baseline.png",
    title: "Cned",
    role: "BTS sio slam",
    date: "2023",
    url: "https://www.linkedin.com/in/nico-vlr123/",
  },
];
  type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
export const Work = (props: WorkProps) => {
  return (
    <Link href={props.url}className="inline-flex intems-center gap-4 hover bg-accent/40 tansition-colors p-1 rounded">
      <span className="bg-accent text-accent-forground p-3 rounded-sm">
        <img
          src={props.image}
          alt={props.title}
          className="w-10 h-10 object-contain rounded-md" />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
