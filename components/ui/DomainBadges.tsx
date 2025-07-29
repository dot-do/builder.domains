import DomainBadge from './DomainBadge';

const domains = [
  {
    domain: 'myagent.io.mw',
    color: 'pink' as const,
    position: '-right-1 top-[-1rem]'
  },
  {
    domain: 'auth.myagent.io.mw',
    color: 'blue' as const,
    position: 'left-[40px] top-[-.25rem]'
  },
  {
    domain: 'design.io.mw',
    color: 'violet' as const,
    position: 'left-[90px] top-[7rem]'
  },
  {
    domain: 'developer.io.mw',
    color: 'green' as const,
    position: 'right-[60px] top-[9rem]'
  },
  {
    domain: 'myagent.db.mw',
    color: 'cyan' as const,
    position: '-right-6 top-[14rem]'
  },
  {
    domain: 'supportagent.ai.mw',
    color: 'orange' as const,
    position: '-left-6 top-[14rem]'
  }
];

export default function DomainBadges() {
  return (
    <div className="-z-10 hidden w-full md:absolute md:block">
      {domains.map((badge, index) => (
        <DomainBadge
          key={index}
          domain={badge.domain}
          color={badge.color}
          position={badge.position}
        />
      ))}
    </div>
  );
}