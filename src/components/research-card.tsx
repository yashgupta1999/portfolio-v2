import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileText, Book, FileCode } from "lucide-react";

interface Props {
  title: string;
  abstract: string;
  authors: string[];
  publishedDate: string;
  journal?: string;
  publicationType?: "journal" | "conference" | "report" | "preprint" | "thesis";
  doi?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  tags?: string[];
}

export function ResearchCard({
  title,
  abstract,
  authors,
  publishedDate,
  journal,
  publicationType = "journal",
  doi,
  links,
  tags,
}: Props) {
  // Choose icon based on publication type
  const getPublicationIcon = () => {
    switch (publicationType) {
      case "journal":
      case "conference":
        return <Book className="h-3 w-3" />;
      case "report":
      case "preprint":
      case "thesis":
        return <FileCode className="h-3 w-3" />;
      default:
        return <Book className="h-3 w-3" />;
    }
  };

  // Get publication type label
  const getPublicationTypeLabel = () => {
    switch (publicationType) {
      case "journal":
        return "Journal Article";
      case "conference":
        return "Conference Paper";
      case "report":
        return "Technical Report";
      case "preprint":
        return "Preprint";
      case "thesis":
        return "Thesis";
      default:
        return "";
    }
  };

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src="/paper-icon.png" alt={title} className="object-contain" />
          <AvatarFallback>
            <FileText className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {publishedDate && (
          <time className="text-xs text-muted-foreground">{publishedDate}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        <div className="text-sm text-muted-foreground">
          {authors.map((author, idx) => (
            <span key={idx}>
              {author}
              {idx < authors.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Badge variant="outline" className="text-xs">
            {getPublicationTypeLabel()}
          </Badge>
          {journal && (
            <p className="text-sm italic flex items-center gap-1">
              {getPublicationIcon()}
              {journal}
              {doi && (
                <Link href={`https://doi.org/${doi}`} className="text-primary hover:underline ml-1">
                  [DOI: {doi}]
                </Link>
              )}
            </p>
          )}
        </div>
        {abstract && (
          <p className="prose dark:prose-invert text-sm text-muted-foreground mt-2">
            {abstract}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
} 