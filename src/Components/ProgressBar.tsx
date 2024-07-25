import { Progress } from "@ark-ui/react";
import "./ProgressBar.css";

interface ProgressBarProps {
  myValue: number;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ myValue }) => (
  <Progress.Root className="progress-root" value={myValue}>
    <Progress.Label className="progress-label">Label</Progress.Label>
    <Progress.ValueText className="progress-value-text" />
    <Progress.Track className="progress-track">
      <Progress.Range className="progress-range" />
    </Progress.Track>
  </Progress.Root>
);
