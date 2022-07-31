import classNames from "classnames";
import * as FeatherIcons from "react-feather";

type Props = {
  name: string;
  size?: number;
  color?: string;
  className?: string | null;
};

const Icon = function ({
  name = "",
  size = 16,
  color = "#000000",
  className = null,
}: Props) {
  if (!name) {
    throw new Error("Name property is required");
  }

  const upperFirst = (str: string) => {
    const firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
  };

  const parsedName = upperFirst(name.split("-").map(upperFirst).join(""));

  const Component = (FeatherIcons as any)[parsedName];

  if (!Component) {
    throw new Error(
      "Icon not found. Please visit this site https://feathericons.com/ for reference."
    );
  }

  return (
    <Component
      className={classNames(className, "stroke-current")}
      size={size}
      color={color}
    />
  );
};

export default Icon;
