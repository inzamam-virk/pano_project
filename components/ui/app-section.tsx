import { Card } from "@/components/ui/card"

interface App {
  name: string
  icon: string
  duration: string
}

interface AppSectionProps {
  title: string
  apps: App[]
}

export function AppSection({ title, apps }: AppSectionProps) {
  return (
    <Card className="bg-zinc-900/50 p-4">
      <h2 className="mb-4 text-sm font-medium text-zinc-400">{title}</h2>
      <div className="space-y-2">
        {apps.map((app) => (
          <div key={app.name} className="flex items-center justify-between rounded-md border border-zinc-800 p-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-800 text-xs font-medium text-white">
                {app.icon}
              </div>
              <span className="text-sm text-zinc-300">{app.name}</span>
            </div>
            <span className="text-sm text-zinc-400">{app.duration}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

