// Generated with Ion on 7/12/2024, 5:08:51 PM
// Figma Link: https://www.figma.com/design/lttAn98b6yjA2bGr3UDN9J?node-id=2524:20657
import { Tag as TagIcon } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
type LineItemProps = {
  value?: string;
  label?: string;
  isDiscount?: boolean;
  isTotal?: boolean;
  className?: string;
};

function LineItem({ value = "$300.00", label = "Subtotal", isDiscount = false, isTotal = false, className = "" }: LineItemProps) {
  return (
    <div
      className={clsx(
        {
          "w-[360px] flex justify-between items-start gap-2.5": true,
          "text-foreground": !isDiscount,
          "text-text-soft": isDiscount,
          "text-sm font-semibold": isTotal,
          "text-[10px] leading-snug": !isDiscount && !isTotal,
        },
        className
      )}
    >
      {!isDiscount && <div>{label}</div>}
      {isDiscount && !isTotal && (
        <div className="flex items-center gap-1">
          <TagIcon size={12} weight={"bold"} />
          <div className="text-[10px] leading-snug">{label}</div>
        </div>
      )}
      <div
        className={clsx({
          "text-[10px] leading-snug": isDiscount,
        })}
      >
        {value}
      </div>
    </div>
  );
}
export default LineItem;
