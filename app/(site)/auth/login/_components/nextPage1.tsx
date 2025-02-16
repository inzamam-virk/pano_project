import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import NextPage2 from "./nextPage2"

export default function NextPage1() {
  const [toNextPage, setToNextPage] = useState(false);
    const handleNext = () => {
      setToNextPage(true)
    };

  if (toNextPage) {
    return <NextPage2 />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-6">
        {/* Logo */}
        <div className="mb-16 pl-[15%]">
          <img 
            src="/logo.svg" 
            alt="Pano logo" 
            width={94} 
            height={24}
          />
        </div>
        {/* Content grid */}
        <div className="flex">
          {/* Form section */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">What&apos;s your name?</h1>
              <p className="text-muted-foreground">
                Help your teammates to recognise and connect with you more easily.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Input type="text" placeholder="e.g. NASA or marketing team" className="w-full max-w-md" />
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground">
                  Your profile photo <span className="text-muted-foreground">(optional)</span>
                </Label>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Photo
                  </Button>
                </div>
              </div>

              {/* Next Button */}
              <button className="rounded-md bg-[#FF6B00] px-3 py-1 text-[15px] font-meduim text-white transition-colors hover:bg-[#FF6B00]/90" onClick={handleNext}>
                Next →
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1">
            <img 
                src="/image.svg" 
                alt="Team chat illustration" 
                width={400} 
                height={300}
                className="ml-auto"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full border-[#E5E5E5] bg-white py-4">
        <div className="flex justify-center items-center gap-4 text-[13px] text-[#666666]">
          <Link href="#" className="hover:text-[#a28b8b]">
            Privacy & Terms
          </Link>
          <Link href="#" className="hover:text-[#1A1A1A]">
            Contact Us
          </Link>
          <div className="flex items-center gap-1">
            <Link href="#" className="hover:text-[#1A1A1A]">
              Change region
            </Link>
            <span>↑</span>
          </div>
        </div>
      </div>
    </div>
  )
}

