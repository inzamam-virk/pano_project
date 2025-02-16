import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, Download, Pencil, MoreHorizontal, Search } from "lucide-react"
import { Sidebar } from "@/components/ui/sidebar"

export default function CompanyWall() {
  const documents = Array(11).fill({
    name: "Test document",
    recipient: "Stiv Rogers",
    dateCreated: "1/03/2023",
    status: "Draft",
    modified: "2 hours ago",
  })

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1">
        <header className="border-b p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Documents</span>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-background bg-orange-500" />
                <div className="h-8 w-8 rounded-full border-2 border-background bg-zinc-500" />
                <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-500" />
              </div>
              <span className="text-sm">11,629</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Company Wall</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Checkbox />
                <span className="text-sm">Select All</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8 w-64" />
                </div>
                <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                  Filter
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Actions</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-32">
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead></TableHead>
                <TableHead>Document Name</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Link className="h-4 w-4 text-orange-500" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {doc.name}
                      <span className="bg-orange-500 text-white text-xs px-1.5 rounded">Sale</span>
                    </div>
                  </TableCell>
                  <TableCell>{doc.recipient}</TableCell>
                  <TableCell>{doc.dateCreated}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-zinc-300"></span>
                      {doc.status}
                    </span>
                  </TableCell>
                  <TableCell>{doc.modified}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

