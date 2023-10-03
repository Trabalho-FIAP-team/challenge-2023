import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {getNameInitials} from "@/lib/utils";

const EventAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>{getNameInitials("Carlos Silva")}</AvatarFallback>
    </Avatar>
  );
}
 
export default EventAvatar;