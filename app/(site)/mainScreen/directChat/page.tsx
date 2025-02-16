"use client"
import { Clock, Home, Lock, MailIcon, Menu, MoreVertical, Plus, Search, Send, SmilePlus } from "lucide-react"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function ChatInterface() {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-2 p-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Replies
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Clock className="h-4 w-4" />
              Activity
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MailIcon className="h-4 w-4" />
              Drafts
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Menu className="h-4 w-4" />
              More
            </Button>
          </div>

          <Separator className="my-2" />

          {/* Channels Section */}
          <div className="p-2">
            <div className="flex items-center justify-between p-2">
              <span className="font-semibold">Loopz</span>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <span className="text-muted-foreground">#</span> general
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Lock className="h-4 w-4" /> design_team
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <span className="text-muted-foreground">#</span> marketing_team
              </Button>
            </div>
          </div>

          <Separator className="my-2" />

          {/* Direct Messages */}
          <div className="p-2">
            <div className="flex items-center justify-between p-2">
              <span className="font-semibold">Direct Messages</span>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>CP</AvatarFallback>
                  </Avatar>
                  <span>Cristal Parker (You)</span>
                </div>
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>BK</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span>Bill Kuphal</span>
                    <span className="text-xs text-muted-foreground">The weather will be perfect for th...</span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Bill Kuphal</h2>
              <p className="text-sm text-muted-foreground">Online for 10 mins</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>BK</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3">
                <p>Who was that philosopher you shared with me recently?</p>
                <span className="text-xs text-muted-foreground">2:14 PM</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#FFE4D6] rounded-lg p-3">
                <p>Roland Barthes</p>
                <span className="text-xs text-muted-foreground">2:16 PM</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>BK</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3">
                <p>What was his vision statement?</p>
                <span className="text-xs text-muted-foreground">2:18 PM</span>
              </div>
            </div>

            <div className="flex justify-end max-w-md ml-auto">
              <div className="bg-[#FFE4D6] rounded-lg p-3 space-y-2">
                <p>"Ultimately in order to see a photograph well, it is best to look away or close your eyes."</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jb3qX9sjkwHSs4farMyUvzRbJvhtj6.png"
                  alt="Aerial photograph"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-sm">Aerial photograph from the Helsinki urban environment division.</p>
                <span className="text-xs text-muted-foreground">2:20 PM</span>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <SmilePlus className="h-5 w-5" />
            </Button>
            <Input placeholder="Type your message" className="flex-1" />
            <Button size="icon" className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90">
              <Send className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

