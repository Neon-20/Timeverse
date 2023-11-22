import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import AuthComponent from './components/AuthComponent';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Landing = async() => {
const supabase = createServerComponentClient({ cookies });
const { data } = await supabase.auth.getSession(); 

if(data.session){
    return redirect("/");
}

    return ( 
        <div>
        <AuthComponent/>
        </div>
    );
}

export default Landing;