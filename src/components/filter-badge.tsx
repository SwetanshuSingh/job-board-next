const FilterBadge = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-1 px-3 py-1 border border-gray-700/45 bg-gray-700/40 rounded-2xl">
      {children}
      <p className="text-sm font-medium text-gray-300">{text}</p>
    </div>
  );
};

export default FilterBadge;
