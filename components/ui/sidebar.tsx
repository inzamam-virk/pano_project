import { Search, MessageSquare, Activity, FileText, MoreHorizontal, Hash, Users } from "lucide-react"
import { ScrollArea } from "./scroll-area"

export function Sidebar() {
  return (
    <div className="w-[240px] border-r bg-background">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-md border border-input bg-background pl-8 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-65px)]">
        <div className="p-2">
          <nav className="grid gap-1">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <MessageSquare className="h-4 w-4" />
              Replies
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Activity className="h-4 w-4" />
              Activity
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <FileText className="h-4 w-4" />
              Drafts
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <MoreHorizontal className="h-4 w-4" />
              More
            </a>
          </nav>
          <div className="mt-4">
            <div className="flex items-center justify-between py-2">
              <h4 className="text-sm font-medium">Loopz</h4>
              <span className="rounded bg-primary px-1.5 text-xs text-primary-foreground">2</span>
            </div>
            <nav className="grid gap-1">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Hash className="h-4 w-4" />
                general
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Users className="h-4 w-4" />
                design_team
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Users className="h-4 w-4" />
                marketing_team
              </a>
            </nav>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between py-2">
              <h4 className="text-sm font-medium">Direct Messages</h4>
              <span className="rounded bg-primary px-1.5 text-xs text-primary-foreground">3</span>
            </div>
            <nav className="grid gap-1">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    alt="User avatar"
                    src="/placeholder.svg?height=32&width=32"
                  />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium leading-none">Cristal Parker</span>
                  <span className="text-xs text-muted-foreground">That's my reply</span>
                </div>
                <span className="ml-auto text-xs text-muted-foreground">12/22/21</span>
              </a>
              {/* Add more direct message items as needed */}
            </nav>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

