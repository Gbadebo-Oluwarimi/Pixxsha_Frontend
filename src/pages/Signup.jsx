import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";
const Signup = () => {
  return (
    <div className="w-full bg-gray-50 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[690px]">
      <div className="hidden bg-muted lg:block">
        <div
          className="h-full w-full bg-center bg-cover"
          style={{ backgroundImage: `url('./img1.png')` }}
        >
          <div className="absolute bottom-4 left-4 flex items-center p-3 bg-white bg-opacity-30 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
            {/* Image inside the pill */}
            <img
              src="./icon.png" // Replace with your icon/image path
              alt="Icon"
              className="w-8 h-8 mr-2 rounded-full" // Adjust size as needed
            />
            <div>
              <p className="text-sm font-semibold">Project Pixxsha for Devto</p>
              <p className="text-xs text-gray-500">Take a Picture..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[450px] gap-12">
          <div className="grid gap-2 text-left">
            <h1 className="text-3xl font-bold">Pixxsha</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
