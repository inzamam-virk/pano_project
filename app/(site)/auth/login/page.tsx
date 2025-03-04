"use client";
import { useState, useEffect } from "react";
import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/hooks/useApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import NextPage from "./_components/nextPage";

export default function Dashboard() {
  const [showWorkspace, setShowWorkspace] = useState(false);
  const router = useRouter();
  const [postApiLoading, setPostApiLoading] = useState(false);

  const FormSchema = z.object({
    email: z.string().email()
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("Clicked button...")
    try {
      setShowWorkspace(true);
      setPostApiLoading(true);
      // const response = await api("POST", "auth/login", values);
      // const {
      //   token: { accessToken },
      //   userEntity: {
      //     _id,
      //     email,
      //     role,
      //     fullName,
      //     isAdminVerified,
      //     isOnline,
      //     isPasswordChanged,
      //     isTwoStepVerification,
      //     isUserVerified,
      //     companyName,
      //     fcmToken,
      //   },
      // } = response;
      // setPostApiLoading(false);
      // toast.success("Logged In Successfully", {
      //   description: "Sunday, December 03, 2023 at 9:00 AM",
      // });
      // console.log(response.userEntity);
      // Cookies.set("accessToken", accessToken);
      // Cookies.set("user", JSON.stringify(response.userEntity));

      // router.push("/dashboard");
    } catch (error: any) {
      setPostApiLoading(false);
      toast.error("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    }
  };

  if (showWorkspace) {
    return <NextPage />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-center">
        <div className="mb-16">
          <Image 
            src="/logo.svg" 
            alt="Pano logo" 
            width={94} 
            height={24}
          />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[400px] flex-1 flex-col px-4 py-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Join XYZ Company on Opano</h1>
              <p className="text-sm text-muted-foreground">Get by entering the email address you use for work</p>
            </div>

            <div className="space-y-4">
              <Input type="email" placeholder="name@work.com" {...form.register("email")} />
              <Button 
                type="submit"
                className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90"
                disabled={postApiLoading}
              >
                Continue
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">or</span>
                </div>
              </div>

              <Button variant="outline" className="w-full justify-start gap-2" type="button">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue With Google
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2" type="button">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    fill="#000"
                  />
                </svg>
                Continue With Apple
              </Button>
            </div>

            <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
              {"Don't have an @pano.com email address?"} <br />
              Contact the workspace administrator at XYZ Company for an invitation.
            </div>
          </div>
        </form>
      </main>

      <footer className="border-t p-4">
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:underline">
            Privacy & Terms
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Change region
          </a>
        </div>
      </footer>
    </div>
  )
}
