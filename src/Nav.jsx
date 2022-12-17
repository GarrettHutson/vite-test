export default function Nav(){
    return (
        <nav className="sticky flex  bg-white w-screen h-16 top-0 items-center px-14">
<div className="mr-auto ml-4"><span className="border-t border-black">CodeClimb</span><span>.</span><span className="underline ">FullTime</span></div>
<div className="w-1/2 text-right">
<a className="w-1/3 mx-4 hover:cursor-pointer hover:font-bold">Blog</a>
<a className="w-1/3 mx-4 hover:cursor-pointer hover:font-bold">Photos</a>
<a className="w-1/3 mx-4 hover:cursor-pointer hover:font-bold">Contact</a>


</div>

        </nav>
    )
}