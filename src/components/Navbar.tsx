// import { useState } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import { buttonVariants } from "./ui/button";
// import { Menu } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";

// interface RouteProps {
//   href: string;
//   label: string;
// }

// const routeList: RouteProps[] = [
//   {
//     href: "#howItWorks",
//     label: "We Offer",
//   },
 

//   {
//     href: "#faq",
//     label: "FAQ",
//   },
// ];

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   return (
//     <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
//       <NavigationMenu className="mx-auto">
//         <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
//           <NavigationMenuItem className="font-bold flex">
//             <a
//               rel="noreferrer noopener"
//               href="/"
//               className="ml-2 font-bold text-xl flex text-purple-600"
//             >
//               iOS Customer Support
//               {/* <LogoIcon />
//               ShadcnUI/React */}
//             </a>
//           </NavigationMenuItem>

//           {/* mobile */}
//           <span className="flex md:hidden">
//             <ModeToggle />

//             <Sheet
//               open={isOpen}
//               onOpenChange={setIsOpen}
//             >
//               <SheetTrigger className="px-2">
//                 <Menu
//                   className="flex md:hidden h-5 w-5"
//                   onClick={() => setIsOpen(true)}
//                 >
//                   <span className="sr-only">Menu Icon</span>
//                 </Menu>
//               </SheetTrigger>

//               <SheetContent side={"left"}>
//                 <SheetHeader>
//                   <SheetTitle className="font-bold text-xl">
//                   iOS Customer Support
//                   </SheetTitle>
//                 </SheetHeader>
//                 <nav className="flex flex-col justify-center items-center gap-2 mt-4">
//                   {routeList.map(({ href, label }: RouteProps) => (
//                     <a
//                       rel="noreferrer noopener"
//                       key={label}
//                       href={href}
//                       onClick={() => setIsOpen(false)}
//                       className={buttonVariants({ variant: "ghost" })}
//                     >
//                       {label}
//                     </a>
//                   ))}
//                   {/* <a
//                     rel="noreferrer noopener"
//                     href="https://github.com/leoMirandaa/shadcn-landing-page.git"
//                     target="_blank"
//                     className={`w-[110px] border ${buttonVariants({
//                       variant: "secondary",
//                     })}`}
//                   >
//                     <GitHubLogoIcon className="mr-2 w-5 h-5" />
//                     Github
//                   </a> */}
//                 </nav>
//               </SheetContent>
//             </Sheet> 
//           </span>

//           {/* desktop */}
//           <nav className="hidden md:flex gap-2">
//             {routeList.map((route: RouteProps, i) => (
//               <a
//                 rel="noreferrer noopener"
//                 href={route.href}
//                 key={i}
//                 className={`text-[17px] ${buttonVariants({
//                   variant: "ghost",
//                 })}`}
//               >
//                 {route.label}
//               </a>
//             ))}
//           </nav>

//           <div className="hidden md:flex gap-2">
//             {/* <a
//               rel="noreferrer noopener"
//               href="https://github.com/leoMirandaa/shadcn-landing-page.git"
//               target="_blank"
//               className={`border ${buttonVariants({ variant: "secondary" })}`}
//             >
//               <GitHubLogoIcon className="mr-2 w-5 h-5" />
//               Github
//             </a> */}

//             <ModeToggle />
//           </div>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </header>
// //     <header className="sticky top-0 z-40 w-full border-b bg-white dark:border-b-slate-700 dark:bg-background">
// //   <NavigationMenu>
// //     <NavigationMenuList className="container mx-auto flex h-14 w-full items-center justify-between px-4">
// //       {/* Logo */}
// //       <NavigationMenuItem>
// //         <a
// //           href="/"
// //           rel="noopener noreferrer"
// //           className="flex items-center text-xl font-bold text-purple-600"
// //         >
// //           iOS Customer Support
// //         </a>
// //       </NavigationMenuItem>

// //       {/* Mobile Menu */}
// //       <div className="flex items-center md:hidden">
// //         <ModeToggle />
// //         <Sheet open={isOpen} onOpenChange={setIsOpen}>
// //           <SheetTrigger>
// //             <Menu className="h-5 w-5" />
// //           </SheetTrigger>
// //           <SheetContent side="left">
// //             <SheetHeader>
// //               <SheetTitle className="text-xl font-bold">
// //                 iOS Customer Support
// //               </SheetTitle>
// //             </SheetHeader>
// //             <nav className="mt-4 flex flex-col items-center gap-2">
// //               {routeList.map(({ href, label }) => (
// //                 <a
// //                   key={label}
// //                   href={href}
// //                   rel="noopener noreferrer"
// //                   onClick={() => setIsOpen(false)}
// //                   className={buttonVariants({ variant: "ghost" })}
// //                 >
// //                   {label}
// //                 </a>
// //               ))}
// //             </nav>
// //           </SheetContent>
// //         </Sheet>
// //       </div>

// //       {/* Desktop Menu */}
// //       <nav className="hidden md:flex gap-4">
// //         {routeList.map(({ href, label }, index) => (
// //           <a
// //             key={index}
// //             href={href}
// //             rel="noopener noreferrer"
// //             className={buttonVariants({ variant: "ghost" })}
// //           >
// //             {label}
// //           </a>
// //         ))}
// //       </nav>

// //       <div className="hidden md:flex items-center gap-4">
// //         <ModeToggle />
// //       </div>
// //     </NavigationMenuList>
// //   </NavigationMenu>
// // </header>

//   );
// };





import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#howItWorks",
    label: "We Offer",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(true);
    } else {
      // Scrolling up
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed h-[10rem] top-0 z-40 w-full border-b bg-white dark:border-b-slate-700 dark:bg-background transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavigationMenu>
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between mx-auto">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="mt-20 font-bold text-4xl flex text-red-600"
            >
              Entertaiment Customer Support
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-2xl">
                  Entertaiment Customer Support
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center text-2xl">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    
    </header>
    
  );
};
