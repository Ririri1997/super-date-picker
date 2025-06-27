export type DateRange = {
  from: Date;
  to: Date;
};

export interface Preset {
  label: string;
  getRange: () => DateRange;
}