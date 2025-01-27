import { cn } from "../lib/utils"
import {Loader} from "lucide-react"
export const LoaderPage = ({className}:{className?: string}) => {
  return (
    <div className={cn(
        "w-screen h-screen flex items-center justify-center bg-transparent z-50",
        className
    )}>
    <Loader className="w-10 h-10 animate-spin" />
    </div>
  )
}

