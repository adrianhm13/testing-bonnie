import { useState } from "react";

export default function Quiz01() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <button disabled={disabled}>Hehey</button>
    </div>
  );
}
