import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NextPage3 from "./nextPage3"
import { useState } from "react"

export default function ProfileSetup() {
  const [toNextPage, setToNextPage] = useState(false);
      const handleNext = () => {
        setToNextPage(true)
      };
  
    if (toNextPage) {
      return <NextPage3 />;
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-[32px] font-bold text-[#1A1A1A] leading-tight">
                Who else is on the (name) team?
              </h1>
              {/* <h1 className="text-[32px] font-bold text-[#1A1A1A] leading-tight">
                (name) team?
              </h1> */}
              <p className="text-[15px] text-[#666666]">
                Add colleagues by email
              </p>
            </div>
            
            <div className="space-y-4">
              <Input 
                type="text"
                placeholder="Example sam@work.com, merry@gmail.com"
                className="w-full h-[120px] p-4 text-[15px] align-top"
              />
              
              <div className="flex items-center gap-3">
                {/* Next Button */}
                <button className="rounded-md bg-[#FF6B00] px-3 py-1 text-[15px] font-meduim text-white transition-colors hover:bg-[#FF6B00]/90" onClick={handleNext}>
                  Next →
                </button>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    className="text-[#FF6B2C] hover:text-[#ff5a14] hover:bg-transparent p-0"
                  >
                    Copy invitation link
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-[#666666] hover:text-[#1A1A1A] hover:bg-transparent ml-auto"
                >
                  Skip this step
                </Button>
              </div>
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
      <div className="fixed bottom-0 left-0 w-full border-t border-[#E5E5E5] bg-white py-4">
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