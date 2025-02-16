import { Search, Bell, Filter } from "lucide-react"
import { Sidebar } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="border-b">
          <div className="flex h-16 items-center px-4 justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <nav className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground">
                  Documents
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">Company Wall</h2>
                <span className="rounded bg-primary px-1.5 text-xs text-primary-foreground">10</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="h-9 w-[200px] rounded-md border border-input bg-background pl-8 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="overflow-hidden bg-[#FFF5EB] border-[#E5E7EB]">
                  <div className="p-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TsKQE3NPnhTvY8mu3QlhsMVNM2iLHP.png"
                      alt="Design illustration"
                      className="w-full h-32 object-contain"
                    />
                    <h3 className="mt-2 text-sm font-medium">Design Department Planners for Plans</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-lg font-semibold">Customer Support</h2>
              <span className="rounded bg-primary px-1.5 text-xs text-primary-foreground">13</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="overflow-hidden bg-[#FFF5EB] border-[#E5E7EB]">
                  <div className="p-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TsKQE3NPnhTvY8mu3QlhsMVNM2iLHP.png"
                      alt="Design illustration"
                      className="w-full h-32 object-contain"
                    />
                    <h3 className="mt-2 text-sm font-medium">Design Department Planners for Plans</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

