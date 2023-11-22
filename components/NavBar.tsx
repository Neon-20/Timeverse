import { ModeToggle } from "./toggle-mode";
import { Button } from "./ui/button";
import  {IoTimer} from "react-icons/io5";
const NavBar  = () => {
    return ( 
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    <IoTimer className = "text-xl"/>
    <h1 className="font-medium">TimeVerse</h1>
    </div>
    <ModeToggle/>
    <Button className="hover:bg-purple-500 hover:text-white font-semibold">
    LogOut
    </Button>
    </div>
    );
}

export default NavBar ;






















































