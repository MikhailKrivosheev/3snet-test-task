import { Button } from "../../Components/UI/Button";
import { useActiveMonths } from "../../store/useActiveMonths";

export default function Control() {
  const { navigateMonths } = useActiveMonths();

  return (
    <div className="mb-8 flex justify-end gap-8">
      <Button onClick={() => navigateMonths("prev")} className="control-button">
        {"<"}
      </Button>
      <Button onClick={() => navigateMonths("next")} className="control-button">
        {">"}
      </Button>
    </div>
  );
}
