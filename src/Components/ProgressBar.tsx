import { Progress } from "@ark-ui/react";
import "./ProgressBar.css";

interface ProgressBarProps {
  myValue: number;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ myValue }) => (
  <Progress.Root className="progress-root" value={myValue}>
    <Progress.Track className="progress-track">
      <Progress.Range className="progress-range" />
    </Progress.Track>
  </Progress.Root>
);
