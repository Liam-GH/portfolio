export default function Navbar() {
    return (
        <nav className='flex justify-center items-center w-full px-8 py-4'>

        <div className='flex items-center space-x-6'>
            <a href="#about" className ="flex items-center ml-auto space-x-6 text-white hover:text-green-400">About</a>
            <a href="#projects" className ="text-white hover:text-green-400">Projects</a>
            <a href="#experience" className="text-white hover:text-green-400">Experience</a>
            <a href="#blog" className="text-white hover:text-green-400">Blog</a>
        </div>

        </nav>
    )
}