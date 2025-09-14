"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const options = [
  { value: "all", label: "All" },
  { value: "gold", label: "Gold Standard" },
  { value: "rcts", label: "RCTs" },
];

export default function ScopeToggle() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentScope = searchParams.get("scope") || "all";

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("scope", e.target.value);
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`);
  };

  return (
    <select
      aria-label="Evidence scope"
      value={currentScope}
      onChange={onChange}
      className="text-black rounded p-1"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

