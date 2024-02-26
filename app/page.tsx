import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { Navbar } from "@/components/navbar";

export default function Home() {
	return (
		<>
		<Navbar />
		<section className="flex flex-col items-center justify-center gap-4">
			<div className="inline-block max-w-lg text-center justify-center">
			<div className="form_data">
                    <div className="form_heading">
                        <h1>SCSE SIP Portal</h1>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" 
							// onChange={(e)=>setEmail(e.target.value)} 
							placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' 
						// onClick={sendOtp}
						>Send OTP
                        {/* {
                            spinner?<Spinner animation="border" size="sm" />:""
                        } */}
                        </button>
                    </form>
                </div>
			</div>

			
		</section>
		</>
	);
}
