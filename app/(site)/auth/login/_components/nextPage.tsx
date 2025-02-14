import Image from "next/image"
import Link from "next/link"

export default function WorkspaceSetup() {
  return (
    <div className="min-h-screen w-full bg-white px-16 py-8">
      {/* Logo */}
      <div className="mb-16">
        <img 
          src="/logo.svg" 
          alt="Pano logo" 
          width={94} 
          height={24}
        />
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Section */}
        <div className="w-[460px]">
          <h1 className="mb-2 text-[32px] font-bold leading-tight text-[#1A1A1A]">
            What's the name of your company or team?
          </h1>
          <p className="mb-6 text-[15px] text-[#666666]">This will be the name of your Opano workspace.</p>

          {/* Input Field */}
          <input
            type="text"
            placeholder="e.g. NASA or marketing team"
            className="mb-4 w-full rounded-md border border-[#E5E5E5] px-4 py-2.5 text-[15px] placeholder:text-[#999999] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
          />

          {/* Next Button */}
          <button className="rounded-md bg-[#FF6B00] px-6 py-2 text-[15px] font-medium text-white transition-colors hover:bg-[#FF6B00]/90">
            Next →
          </button>
        </div>

        {/* Right Section - Illustration */}
        <div className="flex-1">
          <img 
            src="/image.svg" 
            alt="Team chat illustration" 
            width={500} 
            height={400}
            className="ml-auto"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full border-t border-[#E5E5E5] bg-white py-4">
        <div className="mx-16 flex items-center gap-4 text-[13px] text-[#666666]">
          <Link href="#" className="hover:text-[#1A1A1A]">
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

