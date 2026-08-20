type LearnerProgressState =
  | "default"
  | "in-progress"
  | "completed"
  | "disabled";

interface LearnerProgressBadgeProps {
  state?: LearnerProgressState;
}

const stateConfig = {
  default: {
    label: "Not Started",
    background: "#F5F0EB",
    color: "#B45309",
  },
  "in-progress": {
    label: "In Progress",
    background: "#DCE7F7",
    color: "#2563EB",
  },
  completed: {
    label: "Completed",
    background: "#DDF3E5",
    color: "#16803A",
  },
  disabled: {
    label: "Disabled",
    background: "#E5E7EB",
    color: "#9CA3AF",
  },
};

export function LearnerProgressBadge({
  state = "default",
}: LearnerProgressBadgeProps) {
  const config = stateConfig[state];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "110px",
        height: "33px",
        padding: "0 16px",
        borderRadius: "999px",
        backgroundColor: config.background,
        color: config.color,
        fontSize: "16px",
        fontWeight: 500,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {config.label}
    </span>
  );
}