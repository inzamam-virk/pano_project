"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Activity, Hash, Home, Mail, MoreVertical, Plus, ScrollText, Timer } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { PieChart, Pie, Cell } from "recharts"

const barData = [
  { date: "Feb 10", hours: 6 },
  { date: "Feb 11", hours: 3 },
  { date: "Feb 12", hours: 5 },
  { date: "Feb 13", hours: 6 },
  { date: "Feb 14", hours: 4 },
  { date: "Feb 15", hours: 3 },
]

const pieData = [
  { name: "Teams", value: 21.7, color: "#5B5FC7" },
  { name: "Slack", value: 17.7, color: "#4A154B" },
  { name: "VS Code", value: 23.5, color: "#0066B8" },
  { name: "Chrome", value: 18.8, color: "#4CAF50" },
  { name: "Other", value: 18.3, color: "#00BCD4" },
]

export default function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 flex items-center gap-2">
          <div className="h-8 w-8 bg-orange-500 rounded-md flex items-center justify-center">
            <Timer className="h-5 w-5 text-white" />
          </div>
          <input type="search" placeholder="Search" className="flex-1 bg-muted rounded-md px-3 py-1 text-sm" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-81WYb8ntzroGtRfmix2NgoRKxZa8aT.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        <nav className="flex-1 px-2 py-2 space-y-1">
          <div className="flex items-center gap-2 px-3 py-2 text-sm">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm">
            <Mail className="h-4 w-4" />
            <span>Replies</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm">
            <Activity className="h-4 w-4" />
            <span>Activity</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm">
            <ScrollText className="h-4 w-4" />
            <span>Draft</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm">
            <MoreVertical className="h-4 w-4" />
            <span>More</span>
          </div>
        </nav>

        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Loopz</span>
            <Plus className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 text-sm">
              <Hash className="h-4 w-4" />
              <span>general</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-sm">
              <Hash className="h-4 w-4" />
              <span>design_team</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-sm">
              <Hash className="h-4 w-4" />
              <span>marketing_team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b p-4 flex items-center justify-between sticky top-0 bg-background">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <span className="text-sm text-muted-foreground">Employees overall work activity shown here</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-81WYb8ntzroGtRfmix2NgoRKxZa8aT.png"
                alt="User"
                width={24}
                height={24}
                className="rounded-full border-2 border-background"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-81WYb8ntzroGtRfmix2NgoRKxZa8aT.png"
                alt="User"
                width={24}
                height={24}
                className="rounded-full border-2 border-background"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-81WYb8ntzroGtRfmix2NgoRKxZa8aT.png"
                alt="User"
                width={24}
                height={24}
                className="rounded-full border-2 border-background"
              />
            </div>
            <span className="text-sm font-medium">11,629</span>
          </div>
        </header>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-81WYb8ntzroGtRfmix2NgoRKxZa8aT.png"
              alt="Cristal Parker"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Cristal Parker</h2>
              <p className="text-sm text-muted-foreground">Graphics Designer</p>
              <p className="text-xs text-muted-foreground">ACTIVE</p>
            </div>
            <button className="ml-auto text-sm bg-muted px-4 py-1 rounded-md">View Profile</button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <h3 className="text-sm text-muted-foreground mb-2">Total Hours Worked Today</h3>
              <p className="text-2xl font-semibold">002:25:33</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm text-muted-foreground mb-2">Avg Activity Today</h3>
              <p className="text-2xl font-semibold">52%</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm text-muted-foreground mb-2">Total Hrs Worked Past 7 Days</h3>
              <p className="text-2xl font-semibold">022:25:33</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm text-muted-foreground mb-2">Avg Activity Past 7 Days</h3>
              <p className="text-2xl font-semibold">41%</p>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Total Hours Worked Per Day</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Bar dataKey="hours" fill="#FF4500" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Avg Daily Usage of Apps</h3>
                <div className="flex gap-8">
                  <div className="h-48 w-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 flex-1">
                    {pieData.map((app, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: app.color }} />
                        <span className="text-sm">{app.name}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: app.color,
                              width: `${app.value}%`,
                            }}
                          />
                        </div>
                        <span className="text-sm">{app.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

