"use client";
import { Canvas } from "@/components/Canvas";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Github, GithubIcon } from "lucide-react";

const AuthComponent = () => {

const supabase = createClientComponentClient();

const handleLogin = () =>{
    supabase.auth.signInWithOAuth({
        provider:"github",
        options:{
            redirectTo: `https://timeverse.pranavrajveer.com/auth/callback`,
        }
    })
}


    return (
        <div className="p-5 space-y-10">
        <NavBar/>
        <div className="flex text-center items-center justify-center h-80vh
        ">
            <div className="text-center justify-center items-center space-y-6">
            <h1 className="text-3xl font-semibold animate-bounce">
                Invest Your Time Wisely with <span className="">TimeVerse.. 🚀🤓</span>
            </h1>
            <Button 
            onClick={handleLogin}
            className="hover:bg-purple-500 hover:text-white">
                Github Login
                <GithubIcon className="w-4 h-4 ml-2 hover:translate-x-0.5"/>
            </Button>
            </div>
        </div>
        {/* <Canvas/> */}
        </div>
    );
}

export default AuthComponent;