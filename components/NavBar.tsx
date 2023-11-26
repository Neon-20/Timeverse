"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ModeToggle } from "./toggle-mode";
import { Button } from "./ui/button";
import  {IoTimer} from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const NavBar  = () => {
const path = usePathname();
const router = useRouter();
const supabase = createClientComponentClient();

async function handleSignOut(){
await supabase.auth.signOut();
router.refresh()
}

const handleLogin = () =>{
    supabase.auth.signInWithOAuth({
        provider:"github",
        options:{
            redirectTo: `${location.origin}/auth/callback`,
        }
    })
}

const isAuthPage = path === '/auth'


    return ( 
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
    <IoTimer className = "text-xl"/>
    <h1 className="font-medium cursor-pointer">TimeVerse</h1>    </div>
    <ModeToggle/>
    {!isAuthPage ?
    <Button
    onClick={handleSignOut}
    className="btn">
    <span className="btn-text-one">LogOut</span>
    <span className="btn-text-two">Bye Bye!</span>
    </Button>
    : 
    <button
    onClick={handleLogin}
    className="btn">
    <span className="btn-text-one">LogIn</span>
    <span className="btn-text-two">Come on In!</span>
    </button>
    }
    </div>
    );
}

export default NavBar ;






















































