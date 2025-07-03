import { tv } from "tailwind-variants";
import { Button } from "../../Components/UI/Button";
import { useActiveMonths } from "../../store/useActiveMonths";

export default function Control() {
  const { navigateMonths } = useActiveMonths();

  return (
    <div className="mb-8 flex justify-end gap-8">
      <Button
        onClick={() => navigateMonths("prev")}
        className={buttonClasses()}
      >
        {"<"}
      </Button>
      <Button
        onClick={() => navigateMonths("next")}
        className={buttonClasses()}
      >
        {">"}
      </Button>
    </div>
  );
}

const buttonClasses = tv({
  base: "border border-gray-300 text-xl",
});
