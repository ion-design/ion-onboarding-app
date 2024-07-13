// Generated with Ion on 7/12/2024, 5:08:51 PM
// Figma Link: https://www.figma.com/design/lttAn98b6yjA2bGr3UDN9J?node-id=2359:7742
import clsx from "clsx";
type ComponentPropertyProps = {
  isSubcomponentProperty?: boolean;
  name?: string;
  subcomponent?: string;
  description?: string;
  className?: string;
};

function ComponentProperty({
  isSubcomponentProperty = true,
  name = "title",
  subcomponent = "ion/AvatarStatus/",
  description = "Controls the title of the label",
  className = "",
}: ComponentPropertyProps) {
  return (
    <div className={clsx("w-[736px] flex flex-col", className)}>
      <div className="flex items-start">
        {isSubcomponentProperty && <div className="text-xl text-text-soft">{subcomponent}</div>}
        <div className="text-xl font-semibold text-foreground">{name}</div>
      </div>
      <div className="text-lg text-foreground w-full">{description}</div>
    </div>
  );
}
export default ComponentProperty;
