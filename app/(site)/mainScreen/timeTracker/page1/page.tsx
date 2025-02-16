import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Coffee } from "lucide-react"
import { AppSection } from "@/components/ui/app-section"
import { CircularTimer } from "@/components/ui/circular-timer"
import { Sidebar } from "@/components/ui/sidebar"

export default function TimerDashboard() {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h07oe7Q2eVlvOpfDUNNTAri5pExrTr.png"
                alt="Cristal"
              />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-semibold text-white">Cristal Parker</h1>
              <p className="text-sm text-zinc-400">Graphics Designer</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <span className="text-sm text-zinc-400">11,629</span>
            <Button variant="ghost" size="icon">
              <Clock className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-400">Employees overall work activity shown here</p>

        <div className="mt-8 grid grid-cols-[1fr,auto,1fr] items-center gap-8">
          <Button variant="outline" className="justify-start">
            Clock In At 11:20 AM ETS
          </Button>

          <div className="flex gap-8">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-orange-600">
              <Clock className="h-8 w-8 text-white" />
              <span className="absolute -bottom-6 text-xs text-zinc-400">Stop</span>
            </div>

            <CircularTimer time="00:55:98" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-orange-600">
              <Coffee className="h-8 w-8 text-white" />
              <span className="absolute -bottom-6 text-xs text-zinc-400">Break</span>
            </div>
          </div>

          <Button variant="outline" className="justify-start">
            Clock Out At --:-- ETS
          </Button>
        </div>

        <div className="mt-16 grid gap-4">
          <Card className="bg-zinc-900/50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium text-zinc-400">Idle Time</h2>
              <span className="text-sm text-zinc-400">09 min</span>
            </div>
          </Card>

          <AppSection
            title="Office Apps"
            apps={[
              { name: "Opano", icon: "O", duration: "10 min" },
              { name: "Photoshop", icon: "Ps", duration: "05 min" },
              { name: "MS Excel", icon: "Ex", duration: "03 min" },
              { name: "Illustrator", icon: "Ai", duration: "08 min" },
              { name: "MS Words", icon: "W", duration: "02 min" },
            ]}
          />

          <AppSection
            title="Social Media"
            apps={[
              { name: "Facebook", icon: "Fb", duration: "11 min" },
              { name: "Instagram", icon: "Ig", duration: "05 min" },
            ]}
          />

          <AppSection title="Other Apps" apps={[{ name: "Battle.net", icon: "Bn", duration: "02 min" }]} />
        </div>
      </main>
    </div>
  )
}

