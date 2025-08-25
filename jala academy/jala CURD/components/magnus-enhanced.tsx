"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import {
  Plus,
  Edit3,
  Trash2,
  Search,
  LogOut,
  Users,
  LayoutDashboard,
  Database,
  ShieldCheck,
  Home,
  Settings,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Building,
  Globe,
  DollarSign,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

// ---------- Types ----------
type Employee = {
  id: number
  name: string
  email: string
  role: string
  department: string
  status: "Active" | "Inactive"
}

// ---------- Utilities ----------
function clsx(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

// ---------- LocalStorage Helpers ----------
const loadFromStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback
  try {
    const item = localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : fallback
  } catch {
    return fallback
  }
}

const saveToStorage = (key: string, value: any) => {
  if (typeof window === "undefined") return
  localStorage.setItem(key, JSON.stringify(value))
}

// ---------- Data Layer ----------
function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>(() => loadFromStorage("magnus_employees", []))

  useEffect(() => {
    saveToStorage("magnus_employees", employees)
  }, [employees])

  return { employees, setEmployees }
}

// ---------- Components ----------
function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-10 border border-dashed rounded-2xl">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-0.5 rounded-full text-xs bg-muted">{children}</span>
}

function LoginScreen({ onLogin }: { onLogin: (user: string) => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      onLogin(email)
      localStorage.setItem("magnus_user", email)
    } else {
      toast("Please enter credentials")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to continue to JALA Magnus</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function EmployeeDialog({
  open,
  onOpenChange,
  onSave,
  editing,
}: { open: boolean; onOpenChange: (v: boolean) => void; onSave: (e: Employee) => void; editing?: Employee }) {
  const [name, setName] = useState(editing?.name ?? "")
  const [email, setEmail] = useState(editing?.email ?? "")
  const [role, setRole] = useState(editing?.role ?? "")
  const [department, setDepartment] = useState(editing?.department ?? "")
  const [status, setStatus] = useState<Employee["status"]>(editing?.status ?? "Active")

  useEffect(() => {
    if (editing) {
      setName(editing.name)
      setEmail(editing.email)
      setRole(editing.role)
      setDepartment(editing.department)
      setStatus(editing.status)
    }
  }, [editing])

  const handleSave = () => {
    if (!name || !role || !email) return toast("Fill all required fields")
    const e: Employee = {
      id: editing?.id ?? Date.now(),
      name,
      email,
      role,
      department,
      status,
    }
    onSave(e)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{editing ? "Edit Employee" : "Add Employee"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium">Name *</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm font-medium">Email *</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label className="text-sm font-medium">Role *</Label>
            <Input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Software Engineer, QA Analyst"
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">Department</Label>
            <Input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="e.g. Engineering, Quality Assurance"
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">Status</Label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Employee["status"])}
              className="w-full border rounded-md px-3 py-2 mt-1 bg-background"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            {editing ? "Update Employee" : "Add Employee"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function EmployeesModule() {
  const { employees, setEmployees } = useEmployees()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<Employee | undefined>()
  const [search, setSearch] = useState("")

  const filtered = useMemo(
    () =>
      employees.filter(
        (e) =>
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          e.email.toLowerCase().includes(search.toLowerCase()) ||
          e.role.toLowerCase().includes(search.toLowerCase()),
      ),
    [employees, search],
  )

  const handleSave = (emp: Employee) => {
    setEmployees((prev) => {
      const exists = prev.find((p) => p.id === emp.id)
      if (exists) return prev.map((p) => (p.id === emp.id ? emp : p))
      return [...prev, emp]
    })
    toast.success("Employee saved successfully")
  }

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id))
    toast("Employee deleted")
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
            <Users className="h-6 w-6" />
            Employee Management
          </CardTitle>
          <CardDescription className="text-blue-700">Manage your team members and their information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white"
              />
            </div>
            <Button
              onClick={() => {
                setEditing(undefined)
                setDialogOpen(true)
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Employee
            </Button>
          </div>
        </CardContent>
      </Card>

      {filtered.length === 0 ? (
        <Card className="shadow-sm">
          <CardContent className="p-12">
            <EmptyState
              title={search ? "No employees found" : "No employees yet"}
              description={search ? "Try adjusting your search terms." : "Get started by adding your first employee."}
            />
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Email</TableHead>
                    <TableHead className="font-semibold">Role</TableHead>
                    <TableHead className="font-semibold">Department</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="w-24 font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((e) => (
                    <TableRow key={e.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{e.name}</TableCell>
                      <TableCell>
                        <a href={`mailto:${e.email}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                          {e.email}
                        </a>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">{e.role}</span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{e.department || "—"}</TableCell>
                      <TableCell>
                        <Badge
                          variant={e.status === "Active" ? "default" : "secondary"}
                          className={e.status === "Active" ? "bg-green-100 text-green-800" : ""}
                        >
                          {e.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                              setEditing(e)
                              setDialogOpen(true)
                            }}
                            className="h-8 w-8 hover:bg-blue-100"
                          >
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleDelete(e.id)}
                            className="h-8 w-8 hover:bg-red-100 text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      <EmployeeDialog open={dialogOpen} onOpenChange={setDialogOpen} onSave={handleSave} editing={editing} />
    </div>
  )
}

function HomeModule() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900">Welcome to JALA Academy</CardTitle>
          <CardDescription className="text-lg text-blue-700">
            Earning Opportunities for Everyone - Bridging the gap between academics and the IT industry
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blue-800">
            JALA Academy offers project‑based, job‑oriented programs that make candidates industry‑ready in just a few
            months. Our unique approach ensures you gain practical skills through real-world projects while earning
            during your learning journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Our Programs
              </h4>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Job‑guaranteed programs with direct placement services</li>
                <li>Paid internships with stipends up to ₹20K/month</li>
                <li>Full Stack, MERN, QA/SDET, DevOps, Cyber Security, Data Science</li>
                <li>10 interviews guaranteed in 60 days</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Why Choose JALA?
              </h4>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>
                  <strong>Learn by Doing:</strong> Real‑world projects
                </li>
                <li>
                  <strong>Earn While Learning:</strong> Paid internships
                </li>
                <li>
                  <strong>Zero Trainer Reliance:</strong> Self‑paced content
                </li>
                <li>
                  <strong>Industry‑Ready:</strong> Skills matching 3+ years experience
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://jalaacademy.com/services.html" target="_blank" rel="noreferrer">
                Our Services
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://jalaacademy.com/technologies.html" target="_blank" rel="noreferrer">
                Technologies
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://jalaacademy.com/placements.html" target="_blank" rel="noreferrer">
                Placements
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">General Queries:</span>
                <a href="tel:916281994649" className="text-blue-600 hover:underline">
                  +91-628-199-4649
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">HR Email:</span>
                <a href="mailto:HR@Jalaacademy.com" className="text-blue-600 hover:underline">
                  HR@Jalaacademy.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Franchise Enquiries:</span>
                <a href="tel:919652237078" className="text-blue-600 hover:underline">
                  +91-965-223-7078
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Global Presence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <div className="font-medium">Hyderabad (HQ)</div>
                  <div className="text-sm text-muted-foreground">SBR CV Towers, Madhapur</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary">Mumbai</Badge>
                <Badge variant="secondary">Bangalore</Badge>
                <Badge variant="secondary">Delhi</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="outline">Singapore</Badge>
                <Badge variant="outline">USA</Badge>
                <Badge variant="outline">Canada</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow">
        <CardHeader>
          <CardTitle>Opportunities for Everyone</CardTitle>
          <CardDescription>Multiple pathways to success with JALA Academy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Job Seekers</h4>
              <p className="text-sm text-muted-foreground mb-3">High paying software job in 60 days</p>
              <Button size="sm" variant="outline" asChild>
                <a href="https://jalaacademy.com/careers.html" target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Companies</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Hire trained freshers with 3+ years equivalent skills
              </p>
              <Button size="sm" variant="outline" asChild>
                <a href="https://jalaacademy.com/companies.html" target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Investors</h4>
              <p className="text-sm text-muted-foreground mb-3">Millionaire opportunity with zero risk</p>
              <Button size="sm" variant="outline" asChild>
                <a href="https://jalaacademy.com/investors.html" target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Colleges</h4>
              <p className="text-sm text-muted-foreground mb-3">Job guarantee programs at zero cost</p>
              <Button size="sm" variant="outline" asChild>
                <a href="https://jalaacademy.com/colleges.html" target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Franchise</h4>
              <p className="text-sm text-muted-foreground mb-3">Profitable in 100 days, zero additional investment</p>
              <Button size="sm" variant="outline" asChild>
                <a href="https://jalaacademy.com/franchise.html" target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SettingsModule() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage portal preferences and configurations.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Settings content goes here.</p>
      </CardContent>
    </Card>
  )
}

function MoreModule() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const menuItems = [
    { id: "multiple-tabs", label: "Multiple Tabs", description: "Manage multiple content tabs" },
    { id: "menu", label: "Menu", description: "Navigation menu options" },
    { id: "autocomplete", label: "Autocomplete", description: "Auto-suggestion features" },
    { id: "collapsible", label: "Collapsible Content", description: "Expandable content sections" },
    { id: "images", label: "Images", description: "Image management tools" },
    { id: "slider", label: "Slider", description: "Interactive slider components" },
    { id: "tooltips", label: "Tooltips", description: "Helpful tooltip information" },
    { id: "popups", label: "Popups", description: "Modal and popup dialogs" },
    { id: "links", label: "Links", description: "Link management system" },
    { id: "css-properties", label: "CSS Properties", description: "Style customization options" },
    { id: "iframes", label: "iFrames", description: "Embedded content frames" },
  ]

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MoreHorizontal className="h-5 w-5" />
            More Features
          </CardTitle>
          <CardDescription>Explore additional modules and advanced features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                className={`cursor-pointer transition-all hover:shadow-md border-2 ${
                  activeSection === item.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {activeSection === item.id && (
                    <div className="mt-3 p-3 bg-white rounded border">
                      <p className="text-sm">
                        {item.label} functionality will be implemented here. This section provides advanced features for{" "}
                        {item.label.toLowerCase()} management and customization.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Quick Access</CardTitle>
          <CardDescription>Frequently used tools and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 bg-transparent">
              <Database className="h-6 w-6" />
              <span className="text-sm">Data Export</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 bg-transparent">
              <ShieldCheck className="h-6 w-6" />
              <span className="text-sm">Security</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 bg-transparent">
              <Globe className="h-6 w-6" />
              <span className="text-sm">API Access</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 bg-transparent">
              <LayoutDashboard className="h-6 w-6" />
              <span className="text-sm">Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Shell({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<"home" | "employees" | "settings" | "more">("home")

  const stats = [
    { label: "Active Learners", value: 1280, icon: Users },
    { label: "Programs", value: 7, icon: LayoutDashboard },
    { label: "Projects", value: 36, icon: Database },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Topbar */}
      <div className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500" />
            <div>
              <div className="font-semibold leading-none">JALA Magnus</div>
              <div className="text-xs text-muted-foreground">Enhanced Portal</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={tab === "home" ? "default" : "ghost"} onClick={() => setTab("home")}>
              <Home className="h-4 w-4 mr-1" /> Home
            </Button>
            <Button variant={tab === "employees" ? "default" : "ghost"} onClick={() => setTab("employees")}>
              <Users className="h-4 w-4 mr-1" /> Employees
            </Button>
            <Button variant={tab === "settings" ? "default" : "ghost"} onClick={() => setTab("settings")}>
              <Settings className="h-4 w-4 mr-1" /> Settings
            </Button>
            <Button variant={tab === "more" ? "default" : "ghost"} onClick={() => setTab("more")}>
              <MoreHorizontal className="h-4 w-4 mr-1" /> More
            </Button>
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        {tab === "home" && <HomeModule />}
        {tab === "employees" && <EmployeesModule />}
        {tab === "settings" && <SettingsModule />}
        {tab === "more" && <MoreModule />}
      </main>
    </div>
  )
}

// ---------- Root ----------
export default function MagnusEnhanced() {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem("magnus_user"))

  const handleLogout = () => {
    localStorage.removeItem("magnus_user")
    setUser(null)
    toast("Signed out")
  }

  return user ? <Shell onLogout={handleLogout} /> : <LoginScreen onLogin={setUser} />
}
