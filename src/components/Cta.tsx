import { DialogDemo } from "./Form/FormComponent";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Submit
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              YOUR Entertaiment{" "}
            </span>
            Query
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
  Discover the latest in streaming, gaming, and music entertainment. From binge-worthy shows and blockbuster movies to trending podcasts and immersive gaming experiences, we've got everything you need to stay entertained. Your favorite content is just a click away!
</p>

        </div>
        <DialogDemo/>

        <div className="space-y-4 lg:col-start-2">
          {/* <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};