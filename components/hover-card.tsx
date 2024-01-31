import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  className?: string;
  title: string;
  description: string;
  avatarImageUrl: string;
  avatarFallback: string;
  iconProp?: JSX.Element;
  footerDescription?: string;
}

const customHoverCard = ({
  className,
  title,
  description,
  avatarImageUrl,
  avatarFallback,
  iconProp,
  footerDescription,
}: HoverCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className={cn("text-highlight mx-1 font-semibold", className)}>
          {title}
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={`${avatarImageUrl}`} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              {iconProp}
              <span className="text-xs text-muted-foreground">
                {footerDescription}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default customHoverCard;
