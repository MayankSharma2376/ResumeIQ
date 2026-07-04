import { createContext, useContext, useState } from "react";

type JobMatchContextType = {
  result: any;
  setResult: (data: any) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const JobMatchContext = createContext<JobMatchContextType>(
  {} as JobMatchContextType
);

export function JobMatchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <JobMatchContext.Provider
      value={{
        result,
        setResult,
        loading,
        setLoading,
      }}
    >
      {children}
    </JobMatchContext.Provider>
  );
}

export const useJobMatch = () => useContext(JobMatchContext);