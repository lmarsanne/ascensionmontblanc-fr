interface TimelineItemProps {
  date: string;
  title: string;
  text: string;
}

const TimelineItem = ({ date, title, text }: TimelineItemProps) => {
  return (
    <div className="relative pl-12 md:pl-16 pb-12 last:pb-0">
      {/* Dot */}
      <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-summit shadow-elegant ring-4 ring-background">
        <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
      </span>

      <time className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary-glow mb-2">
        {date}
      </time>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-base md:text-lg leading-relaxed text-foreground/85">
        {text}
      </p>
    </div>
  );
};

export default TimelineItem;
