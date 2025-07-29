
const Features = () => {
  return (
    <section className="py-32 max-w-6xl mx-auto">
      <div className="container">
        
        <h2 className="text-3xl font-medium text-foreground">
          A better way to build websites
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:border-border md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-10 font-mono text-lg font-semibold md:text-xl text-accent-foreground">
              1
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl text-foreground">
                Performance
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:border-border md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-10 font-mono text-lg font-semibold md:text-xl text-accent-foreground">
              2
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl text-foreground">
                Innovation
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:border-border md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-10 font-mono text-lg font-semibold md:text-xl text-accent-foreground">
              3
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl text-foreground">
                Quality
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:border-border md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-10 font-mono text-lg font-semibold md:text-xl text-accent-foreground">
              4
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl text-foreground">
                Accessibility
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };