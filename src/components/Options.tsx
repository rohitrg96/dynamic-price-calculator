import type { Option } from "../utils/types";

export const Options: React.FC<{
  item: string;
  items: Option[];
  setItem: React.Dispatch<React.SetStateAction<string>>;
}> = ({ items, item, setItem }) => {
  return (
    <>
      <div className="flex gap-2">
        {items.map((s) => (
          <button
            key={s.value}
            className={`cursor-pointer px-4 py-2 rounded-full border ${
              item === s.value ? "bg-cyan-500 text-white" : "bg-cyan-200"
            }`}
            onClick={() => setItem(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </>
  );
};
