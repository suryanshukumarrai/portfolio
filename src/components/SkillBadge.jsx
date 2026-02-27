const SkillBadge = ({ name, level }) => (
  <div className="glass rounded-2xl p-4 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-frost">{name}</p>
      <span className="text-xs text-mist">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-ash">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-neon via-glow to-indigo-400"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default SkillBadge;
