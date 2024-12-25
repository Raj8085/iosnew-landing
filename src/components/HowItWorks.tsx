// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";



// interface FeatureProps {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// const features: FeatureProps[] = [
//   {
//     icon: <MedalIcon />,
//     title: "Setup Assistance",
//     description:
//       "Get help setting up your iOS devices effortlessly.",
//   },
//   {
//     icon: <MapIcon />,
//     title: "Troubleshooting",
//     description:
//       "Fix technical issues on iPhones and iPads.",
//   },
//   {
//     icon: <PlaneIcon />,
//     title: "iCloud Management",
//     description:
//       "Manage backups, recovery, and file synchronization.",
//   },
//   {
//     icon: <GiftIcon />,
//     title: "App Support",
//     description:
//       "Resolve app crashes or installation problems.",
//   },
// ];

// export const HowItWorks = () => {
//   return (
//     <section
//       id="howItWorks"
//       className="container text-center py-24 sm:py-32"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold ">
//         What we{" "}
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Offer{" "}
//         </span>
//         Step-by-Step Guide
//       </h2>
//       <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//         dolor pariatur sit!
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map(({ icon, title, description }: FeatureProps) => (
//           <Card
//             key={title}
//             className="bg-muted/50"
//           >
//             <CardHeader>
//               <CardTitle className="grid gap-4 place-items-center">
//                 {icon}
//                 {title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>{description}</CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FilmIcon, MusicNoteIcon, GamepadIcon, PodcastIcon } from "../components/Icons";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <FilmIcon />,
    title: "Streaming Assistance",
    description:
      "Get support for setting up and optimizing streaming platforms like Netflix, Hulu, and more.",
  },
  {
    icon: <MusicNoteIcon />,
    title: "Music and Audio Setup",
    description:
      "Enjoy seamless playback and personalized recommendations on platforms like Spotify and Apple Music.",
  },
  {
    icon: <GamepadIcon />,
    title: "Gaming Support",
    description:
      "Troubleshoot performance issues and optimize settings for the best gaming experience.",
  },
  {
    icon: <PodcastIcon />,
    title: "Podcast and Audio Content",
    description:
      "Find, subscribe, and manage podcasts with ease on your favorite platforms.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        What we{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Offer{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover the best entertainment experiences with our expert support. From streaming to gaming, we’ve got you covered!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};


// export const EntertaimentImage=()=>{
//   return (
//     <img src="/EntertaimentImage.jpg" alt="" className="w-[90rem] h-[30rem] ml-10"/>
//   )
// }