export default function BrowserMockup() {
  return (
    <div className="absolute -z-10 w-full h-[900px] overflow-hidden rounded-t-xl bg-gradient-to-b from-white via-background to-transparent dark:from-black/10 dark:via-background dark:to-transparent dark:backdrop-blur-md md:top-[-90px]">
      {/* Browser header */}
      <div className="flex h-8 w-full gap-2 bg-muted px-4 py-3 dark:opacity-40">
        <div className="h-2.5 w-2.5 rounded-full bg-foreground opacity-20 dark:opacity-80"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-foreground opacity-20 dark:opacity-80"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-foreground opacity-20 dark:opacity-80"></div>
      </div>
      
      {/* Browser content */}
      <div className="h-full w-full">
        <div className="h-full w-full py-8 px-6">
          {/* Top navigation area */}
          <div className="container">
            <div className="flex w-full justify-between">
              <div>
                <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground/[8%]"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
                <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
                <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="container flex w-full justify-between gap-20 py-16">
            <div className="flex flex-col gap-4">
              <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-16 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-16 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-16 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-12 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
              <div className="h-2 w-16 rounded-full bg-muted dark:bg-foreground opacity-100 dark:opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}