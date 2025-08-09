type ErrorDisplayProps = {
  error: Error | null;
};

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return;

  return (
    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      Error: {error.message}
    </div>
  );
};

export default ErrorDisplay;
