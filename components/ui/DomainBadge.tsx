interface DomainBadgeProps {
  domain: string;
  color: 'pink' | 'blue' | 'violet' | 'green' | 'cyan' | 'orange';
  position: string;
}

const colorClasses = {
  pink: 'bg-pink-200 text-pink-500 dark:bg-pink-600/20',
  blue: 'bg-blue-200 text-blue-500 dark:bg-blue-600/20',
  violet: 'bg-violet-200 text-violet-500 dark:bg-violet-600/20',
  green: 'bg-green-200 text-green-600 dark:bg-green-600/20',
  cyan: 'bg-cyan-200 text-cyan-500 dark:bg-cyan-600/20',
  orange: 'bg-orange-200 text-orange-600 dark:bg-orange-600/20'
};

export default function DomainBadge({ domain, color, position }: DomainBadgeProps) {
  return (
    <div className={`absolute ${position} opacity-50`}>
      <div className="flex items-center gap-1">
        <div className={`inline-flex rounded-md px-1.5 py-0.5 text-xs font-medium tracking-tight backdrop-blur-sm ${colorClasses[color]}`}>
          {domain}
        </div>
      </div>
    </div>
  );
}