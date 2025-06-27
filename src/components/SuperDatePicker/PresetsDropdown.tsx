import type { DateRange, Preset } from "../../types";

const presets: Preset[] = [
  {
    label: "Last 15 minutes",
    getRange() {
      const to = new Date();
      const from = new Date(to.getTime() - 15 * 60 * 1000);
      return { from, to };
    },
  },
  {
    label: "Today",
    getRange() {
      const now = new Date();
      const from = new Date(now.setHours(0, 0, 0, 0));
      const to = new Date();

      return { from, to };
    },
  },
];

interface PresetsDropdownProps {
  onPresetSelect: (range: DateRange) => void;
}

function PresetsDropdown({ onPresetSelect }: PresetsDropdownProps) {
  return (
    <select
      onChange={e => {
        const preset = presets.find(p => p.label === e.target.value);
console.log(e.target.value);
        if (preset) {
          onPresetSelect(preset.getRange());
        }
      }}
      defaultValue=""
    >
      <option>select preset</option>
      {presets.map((p) => (
        <option key={p.label} value={p.label}>
          {p.label}
        </option>
      ))}
    </select>
  );
}

export default PresetsDropdown;
