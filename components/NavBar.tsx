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
    <Link href = "http://localhost:3000">
    <h1 className="font-medium cursor-pointer">TimeVerse</h1>
    </Link>
    </div>
    <ModeToggle/>
    {!isAuthPage ?
    <Button
    onClick={handleSignOut}
    className="hover:bg-purple-500 hover:text-white font-semibold">
    LogOut
    </Button>
    : 
    <Button variant={"destructive"}
    onClick={handleLogin}
    className="hover:bg-purple-500 hover:text-white font-bold">
        LogIn
    </Button>
    }
    </div>
    );
}

export default NavBar ;






















































