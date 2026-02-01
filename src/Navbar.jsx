import "./index.css"
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

function NavBar() {
    const [open, setOpen] = useState(false);

    // prevent background scroll when overlay is open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      }
    }, [open]);

    const MenuLinks = ({ onLinkClick = () => {} }) => (
      <>
        <div className="text-[40px] font-mono font-bold justify-between">
          <Link to="/">
              <img src="/textlogo.png" onClick={onLinkClick} className="scale-115 mb-3 hover:scale-120 transition duration-300 max-w-58" alt="UA iGEM"  />
          </Link>
          <ul className="flex flex-col gap-2 justify-start">
            <li className="w-full flex justify-center transition duration-200 hover:scale-105 hover:translate-x-2">
              <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                <circle cx="11" cy="11" r="10.5" className="stroke-blue-100" />
                <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-100" />
              </svg>
              <Link to="/about" onClick={onLinkClick} className="block w-[85vw] max-w-[680px] text-white px-4 rounded-md">About Us</Link>
            </li>
            <li className="w-full flex justify-center  transition duration-200 hover:scale-105 hover:translate-x-2">
              <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                <circle cx="11" cy="11" r="10.5" className="stroke-blue-100" />
                <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-100" />
              </svg>
              <Link to="/projects" onClick={onLinkClick} className="block w-[85vw] max-w-[680px] text-white px-4 -mb-3 rounded-md">Projects</Link>
            </li>
            <li className="w-full flex justify-center transition duration-200 hover:scale-105 hover:translate-x-2">
              <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                <circle cx="11" cy="11" r="10.5" className="stroke-blue-100" />
                <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-100" />
              </svg>
              <Link to="/contact" onClick={onLinkClick} className="block w-[85vw] max-w-[680px] text-white px-4 -mb-3 rounded-md">Contact</Link>
            </li>
            <li className="w-full flex justify-center -mt-3">
              <div className="flex flex-col w-[85vw] max-w-[680px] px-4 text-sm rounded-md">
                <HashLink smooth to="/contact#apply" onClick={onLinkClick} className="block py-1 text-white text-lg transition duration-200 hover:scale-105 hover:translate-x-2">- Apply</HashLink>
                <HashLink smooth to="/contact#donate" onClick={onLinkClick} className="block py-1 text-white text-lg transition duration-200 hover:scale-105 hover:translate-x-2">- Donate</HashLink>
              </div>
            </li>
            <li className="w-full flex justify-center transition duration-200 hover:scale-105 hover:translate-x-2">
              <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                <circle cx="11" cy="11" r="10.5" className="stroke-blue-100" />
                <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-100" />
              </svg>
              <Link to="/journal" onClick={onLinkClick} className="block w-[85vw] max-w-[680px] text-white px-4 rounded-md">Journal</Link>
            </li>
          </ul>
        </div>
        <div>
          <hr className="my-4 w-100px border-white" />
          <div className="flex flex-row">
            <p className="text-[27px] text-white font-bold font-mono" onClick={() => window.location.href = '/contact'}>Follow Us</p>
            <img src="/instagram.png" className="w-[30px] h-[30px] object-cover ml-3 translate-y-1 filter invert transition hover:scale-110" alt="Instagram" onClick={() => window.location.href = 'https://instagram.com/uasynbio/'} />
            <img src="/linkedin.png" className="w-[30px] h-[30px] object-cover ml-3 translate-y-1 filter invert transition hover:scale-110" alt="Instagram" onClick={() => window.location.href = 'https://www.linkedin.com/company/ua-igem'} />
          </div>
          <p className="text-xs text-white font-mono justify-start mb-4">© UA iGEM 2025</p>
        </div>
      </>
    );

    return (
      <>
        {/* Desktop sidebar (unchanged) */}
        <div className="fixed left-0 top-0 text-white h-screen w-[320px] hidden md:flex flex-col bg-gradient-to-r from-green-300 to-blue-400 p-3">
          <div className="text-white h-full w-full gap-8 pt-6 bg-gradient-to-r from-green-400 to-blue-400">
            <div className="h-full flex flex-col justify-between pl-6">
              <MenuLinks />
            </div>
          </div>
        </div>

        {/* Mobile toggle button (visible on small screens) - hide when overlay is open */}
        {!open && (
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
            className={`fixed right-1.5 top-1.5 z-50 md:hidden rounded-md bg-white/40 text-red-400 transform transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}
          >
            <img src="/synbio_star.png" className="h-9 w-9"/>
          </button>
        )}

        {/* Fullscreen overlay menu for mobile (always mounted to allow smooth transitions) */}
        <div className={`fixed inset-0 z-40 md:hidden p-6 overflow-auto transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-green-200" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-green-300 m-3" aria-hidden />
          </div>
          <div className={`relative h-full w-full transform transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-6'}`}>
            <div className="h-full flex flex-col justify-between pt-5 px-4">
              <MenuLinks onLinkClick={() => { if (window.innerWidth < 768) setOpen(false); }} />
            </div>
          </div>
        </div>
      </>
    )
}

export default NavBar;