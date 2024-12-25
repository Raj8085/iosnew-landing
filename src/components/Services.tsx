const Features = () => {
  const features = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: "📺",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favourites easily and always have something to watch.",
      icon: "⬇️",
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: "📱",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: "👧",
    },
  ];

  return (
    <div
      // Radial gradient background for a fun, entertainment vibe
      className="
        grid grid-cols-1 gap-6 px-4 py-12 text-white 
        bg-[radial-gradient(ellipse_at_center,_#fca5a5,_#ec4899)] 
        md:grid-cols-2 lg:grid-cols-4
      "
    >
      {features.map((feature, index) => (
        <div
          key={index}
          // Semi-transparent card with a hover scale effect
          className="
            flex transform flex-col items-start 
            rounded-lg bg-white/10 p-6 shadow-lg 
            backdrop-blur-md transition-transform duration-300 
            hover:scale-105
          "
        >
          <div className="mb-4 text-4xl">{feature.icon}</div>
          <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
