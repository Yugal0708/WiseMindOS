const StatCard = ({ title, value, icon, trend, className = '' }) => {
  return (
    <div className={`group relative bg-[#1a1b2e]/80 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 border border-white/10 hover:border-indigo-500/50 backdrop-blur-2xl rounded-xl p-4 md:p-5 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.5)] hover:-translate-y-1.5 transform-gpu transition-all duration-300 ease-in-out ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-slate-400 text-xs md:text-sm font-medium">{title}</p>
          <p className="text-2xl md:text-3xl font-bold text-white mt-2 drop-shadow-sm">{value}</p>
          {trend && (
            <p className={`text-sm mt-1 font-medium ${trend.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {trend.positive ? '+' : '-'} {trend.value}%
            </p>
          )}
        </div>
        {icon && (
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 md:p-3 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] group-hover:scale-105 transition-all duration-300 text-white">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;