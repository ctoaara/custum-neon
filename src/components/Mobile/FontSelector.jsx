import classNames from "classnames";


export const FontSelector = (props) => {
  const { fonts, onSelect, selected } = props;

  return (
    <ul className="flex flex-wrap gap-5">
      {fonts.map((font) => {
        const isSelected = selected ? selected.value === font.value : false;
        return (
          <li
            onClick={() => onSelect?.(font)}
            key={font.value}
            className={classNames(
              "p-[2px] border border-[#e9e9e9] rounded-md inline-block text-xl flex-1 text-center min-w-[100px] hover:bg-[#5761ff] hover:border-[#5761ff] cursor-pointer hover:text-white",
              isSelected && "bg-pink-600 text-white border-pink-600"
            )}
            style={{ fontFamily: font.value }}
          >
            {font.name}
          </li>
        );
      })}
    </ul>
  );
};
