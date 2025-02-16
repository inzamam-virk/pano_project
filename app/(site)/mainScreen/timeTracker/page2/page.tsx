import Image from "next/image"
import { Edit2, Trash2, Search, Clock, MessageSquare, FileText, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ClockReport() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
        </div>

        <div className="flex-1">
          <nav className="space-y-1 px-3">
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
              <MessageSquare className="w-5 h-5 mr-3" />
              Replies
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
              <Clock className="w-5 h-5 mr-3" />
              Activity
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
              <FileText className="w-5 h-5 mr-3" />
              Drafts
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
              <MoreHorizontal className="w-5 h-5 mr-3" />
              More
            </a>
          </nav>

          <div className="mt-6 px-3">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium">Loopz</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <nav className="space-y-1">
              <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
                <span className="text-sm"># general</span>
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
                <span className="text-sm"># design_team</span>
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
                <span className="text-sm"># marketing_team</span>
              </a>
            </nav>
          </div>

          <div className="mt-6 px-3">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium">Direct Messages</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="h-16 border-b flex items-center justify-between px-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search" className="pl-10 w-full" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white">
                <Image src="/placeholder.svg" alt="User" width={32} height={32} className="rounded-full" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white">
                <Image src="/placeholder.svg" alt="User" width={32} height={32} className="rounded-full" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white">
                <Image src="/placeholder.svg" alt="User" width={32} height={32} className="rounded-full" />
              </div>
            </div>
            <span className="text-sm text-gray-600">11,629</span>
            <Button variant="ghost" size="icon">
              <Clock className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <main className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <Image src="/placeholder.svg" alt="Cristal Parker" width={48} height={48} className="rounded-lg" />
            <div>
              <h1 className="text-xl font-semibold">Cristal Parker</h1>
              <p className="text-sm text-gray-600">Graphics Designer</p>
              <p className="text-xs text-gray-400 mt-1">get me</p>
            </div>
            <Button variant="outline" className="ml-auto">
              View Profile
            </Button>
          </div>

          <p className="text-sm text-gray-500 mb-6">Managers/administrators have access to edit incorrect entries</p>

          <h2 className="text-lg font-semibold mb-4">Clock In / Clock Out Report of 12-Feb-2024</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm">Employee Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Clock In Time</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Clock Out Time</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Total Hours Work</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Total Activity</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "John Smith",
                    role: "Visual Designer",
                    clockIn: "12:30 PM",
                    clockOut: "6:30 PM",
                    hours: "6 Hours",
                    activity: "65%",
                  },
                  {
                    name: "Sam",
                    role: "Virtual Artist",
                    clockIn: "11:00 AM",
                    clockOut: "8:00 PM",
                    hours: "8 Hours",
                    activity: "98%",
                  },
                  {
                    name: "Chan",
                    role: "Operations Manager",
                    clockIn: "7:30 AM",
                    clockOut: "5:30 PM",
                    hours: "10 Hours",
                    activity: "95%",
                  },
                  {
                    name: "Tommy lee",
                    role: "Product Designer",
                    clockIn: "8:15 AM",
                    clockOut: "1:30 PM",
                    hours: "5.15 Hours",
                    activity: "75%",
                  },
                  {
                    name: "Tiny Malaya",
                    role: "UI/UX Designer",
                    clockIn: "9:00 AM",
                    clockOut: "5:00 PM",
                    hours: "9 Hours",
                    activity: "88%",
                  },
                  {
                    name: "robnilas",
                    role: "QA Specialist",
                    clockIn: "9:00 AM",
                    clockOut: "4:00 PM",
                    hours: "8 Hours",
                    activity: "79%",
                  },
                  {
                    name: "Maicha",
                    role: "Product Designer",
                    clockIn: "9:00 AM",
                    clockOut: "5:00 PM",
                    hours: "9 Hours",
                    activity: "100%",
                  },
                ].map((employee, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                          {employee.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{employee.name}</div>
                          <div className="text-xs text-gray-500">{employee.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{employee.clockIn}</td>
                    <td className="py-3 px-4 text-sm">{employee.clockOut}</td>
                    <td className="py-3 px-4 text-sm">{employee.hours}</td>
                    <td className="py-3 px-4 text-sm">{employee.activity}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

