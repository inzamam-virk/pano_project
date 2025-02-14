import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Menu,
  Hash,
  MessageSquare,
  Layout,
  Network,
  FileText,
  MoreVertical,
  Plus,
  Bot,
  Send,
  Smile,
  Paperclip,
  Bell,
  Calendar,
  ChevronDown,
  Clock,
} from "lucide-react"

export default function ChatInterface() {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-2 p-2">
            <div className="px-2 space-y-1">
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <MessageSquare className="h-4 w-4" /> Therads
                <span className="ml-auto text-xs text-muted-foreground">1</span>
              </button>
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <Bell className="h-4 w-4" /> Mentions & reactions
              </button>
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <FileText className="h-4 w-4" /> Drafts & sent
                <span className="ml-auto text-xs text-muted-foreground">2</span>
              </button>
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <Layout className="h-4 w-4" /> Canvases
              </button>
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <Network className="h-4 w-4" /> Opano connect
              </button>
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <FileText className="h-4 w-4" /> Files
              </button>
              <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm">
                <MoreVertical className="h-4 w-4" /> More
              </button>
            </div>

            <div className="pt-4">
              <div className="px-4 text-sm font-medium">Loopz</div>
              <div className="mt-2">
                <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm">
                  <Hash className="h-4 w-4" /> 01-announcements
                  <span className="ml-auto text-xs text-muted-foreground">1</span>
                </button>
                <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm bg-orange-500 text-white">
                  <Hash className="h-4 w-4" /> 02-community
                </button>
                <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm">
                  <Hash className="h-4 w-4" /> 03-talk random
                </button>
              </div>
              <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm text-orange-500">
                <Plus className="h-4 w-4" /> Add channels
              </button>
            </div>

            <div className="pt-4">
              <div className="px-4 text-sm font-medium">Direct messages</div>
              <div className="mt-2">
                <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm">
                  <Bot className="h-4 w-4" /> Opanobot
                </button>
                <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                  John smith
                </button>
              </div>
              <button className="flex items-center gap-2 w-full px-4 py-1.5 text-sm text-orange-500">
                <Plus className="h-4 w-4" /> Add coworkers
              </button>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QcVZauJyZTOyKB7auP0xluytazXC8V.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">Bill Kuphal</div>
            <div className="text-sm text-muted-foreground">Online for 10 mins</div>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QcVZauJyZTOyKB7auP0xluytazXC8V.png"
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <div className="text-sm text-muted-foreground">2:14 PM</div>
                <div className="mt-1 bg-gray-100 rounded-lg p-3">
                  Who was that philosopher you shared with me recently?
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-md">
                <div className="text-sm text-muted-foreground text-right">2:16 PM</div>
                <div className="mt-1 bg-blue-50 rounded-lg p-3">Roland Barthes</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QcVZauJyZTOyKB7auP0xluytazXC8V.png"
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <div className="text-sm text-muted-foreground">2:18 PM</div>
                <div className="mt-1 bg-gray-100 rounded-lg p-3">What was his vision statement?</div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-md">
                <div className="text-sm text-muted-foreground text-right">2:20 PM</div>
                <div className="mt-1 bg-blue-50 rounded-lg p-3">
                  "Ultimately in order to see a photograph well, it is best to look away or close your eyes."
                </div>
                <div className="mt-2">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Aerial photograph"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="mt-1 text-sm text-muted-foreground">
                    Aerial photograph from the Helsinki urban environment division
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
            <Input placeholder="Type your message" className="flex-1" />
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="bg-orange-500 hover:bg-orange-600">
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l p-6">
        <div className="text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QcVZauJyZTOyKB7auP0xluytazXC8V.png"
            alt="Profile"
            width={176}
            height={176}
            className="rounded-lg mx-auto"
          />
          <h2 className="mt-4 text-xl font-semibold">Mary Heer</h2>
          <p className="text-sm text-muted-foreground">Jr. Designer</p>
          <p className="text-sm text-muted-foreground">she/her/hers</p>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bell className="h-4 w-4" /> Away, notifications snoozed
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> 6:20 AM local time
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Button variant="outline" className="w-full">
            Message
          </Button>
          <Button variant="outline" className="w-full">
            Clust
          </Button>
          <Button variant="outline" className="w-full">
            <Calendar className="h-4 w-4 mr-2" /> Calendar
          </Button>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">About me</h3>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <div className="text-muted-foreground">Start Date</div>
              <div>Dec 6, 2022 (7 months ago)</div>
            </div>
            <div>
              <div className="text-muted-foreground">LinkedIn</div>
              <a href="#" className="text-orange-500">
                My LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

