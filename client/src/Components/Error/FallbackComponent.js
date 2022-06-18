import React from "react";

const FallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h2>An error occurred: {error.message}</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default FallbackComponent;
