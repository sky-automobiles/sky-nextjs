"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

// Define the shape of the MongoDB data
interface MongoDBData {
  _id: {
    $oid: string;
  };
  name: string;
  phone: string;
  email: string;
  model: string;
  outlet: string;
  variant: string;
  leadFrom: string;
  state: string;
  isDeleted: boolean;
  time: string;
  date: string;
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
  __v: number;
}

// // Define the context value type
interface DataContextType {
  financeData: MongoDBData[];
  setFinanceData: (data: MongoDBData[]) => void;
  insuranceData: MongoDBData[];
  setInsuranceData: (data: MongoDBData[]) => void;
  testDriveData: MongoDBData[];
  setTestDriveData: (data: MongoDBData[]) => void;
  careerData: MongoDBData[];
  setCareerData: (data: MongoDBData[]) => void;
  contactUsData: MongoDBData[];
  setContactUsData: (data: MongoDBData[]) => void;
  buyACarData: MongoDBData[];
  setBuyACarData: (data: MongoDBData[]) => void;
  sellACarData: MongoDBData[];
  setSellACarData: (data: MongoDBData[]) => void;
  arenaData: MongoDBData[];
  setArenaData: (data: MongoDBData[]) => void;
  nexaData: MongoDBData[];
  setNexaData: (data: MongoDBData[]) => void;
  bookAServiceData: MongoDBData[];
  setBookAServiceData: (data: MongoDBData[]) => void;
  recentData: MongoDBData[];
  // setRecentData: (data: MongoDBData[]) => void;
  refreshing: boolean;
  setRefreshing: (refreshing: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Create a context with a default value
const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataWrapperProps {
  children: ReactNode;
}

export function DataWrapper({ children }: DataWrapperProps) {
  const [financeData, setFinanceData] = useState<MongoDBData[]>([]);
  const [insuranceData, setInsuranceData] = useState<MongoDBData[]>([]);
  const [testDriveData, setTestDriveData] = useState<MongoDBData[]>([]);
  const [careerData, setCareerData] = useState<MongoDBData[]>([]);
  const [contactUsData, setContactUsData] = useState<MongoDBData[]>([]);
  const [buyACarData, setBuyACarData] = useState<MongoDBData[]>([]);
  const [sellACarData, setSellACarData] = useState<MongoDBData[]>([]);
  const [arenaData, setArenaData] = useState<MongoDBData[]>([]);
  const [nexaData, setNexaData] = useState<MongoDBData[]>([]);
  const [bookAServiceData, setBookAServiceData] = useState<MongoDBData[]>([]);
  const [recentData, setRecentData] = useState<MongoDBData[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // useEffect(() => {
  //   // const token = Cookies.get("token");
  //   const fetchData = async () => {
  //     setLoading(true);
  //     setFinanceData([]);
  //     setInsuranceData([]);
  //     setTestDriveData([]);
  //     setCareerData([]);
  //     setContactUsData([]);
  //     setBuyACarData([]);
  //     setSellACarData([]);
  //     setArenaData([]);
  //     setNexaData([]);
  //     setBookAServiceData([]);
  //     setRecentData([]);
  //     try {
  //       const response = await fetch("/api/on-road-price?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setRecentData(data.slice(0, 15));
  //       }
  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }
  //     // Buy A Car
  //     try {
  //       const response = await fetch("/api/buy-a-car?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setBuyACarData(data);
  //       }
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }
  //     // Sell A Car
  //     try {
  //       const response = await fetch("/api/sell-your-car?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setSellACarData(data);
  //       }

  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }

  //     // service
  //     try {
  //       const response = await fetch("/api/service?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setBookAServiceData(data);
  //       }
  //       console.log(data);
  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }
  //     // Finance
  //     try {
  //       const response = await fetch("/api/finance?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setFinanceData(data);
  //       }

  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }
  //     // Insurance
  //     try {
  //       const response = await fetch("/api/insurance?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setInsuranceData(data);
  //       }

  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);

  //       toast.error(err.message);
  //     }
  //     // Contact Us
  //     try {
  //       const response = await fetch("/api/contactUs?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setContactUsData(data);
  //       }
  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }
  //     // Career
  //     try {
  //       const response = await fetch("/api/career?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setCareerData(data);
  //       }
  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     }
  //     // Test Drive
  //     try {
  //       const response = await fetch("/api/test-drive?rangeValue=allData");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();

  //       if (data.length > 0) {
  //         setTestDriveData(data);
  //       }
  //       // setArenaData(data);
  //     } catch (err: any) {
  //       // setError(err.message);
  //       toast.error(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // if (token) fetchData();
  // }, [refreshing]);
  // Define the context value
  const contextValue: DataContextType = {
    financeData,
    setFinanceData,
    insuranceData,
    setInsuranceData,
    testDriveData,
    setTestDriveData,
    careerData,
    setCareerData,
    contactUsData,
    setContactUsData,
    buyACarData,
    setBuyACarData,
    sellACarData,
    setSellACarData,
    arenaData,
    setArenaData,
    nexaData,
    setNexaData,
    bookAServiceData,
    setBookAServiceData,
    recentData,
    refreshing,
    setRefreshing,
    loading,
    setLoading,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

// Custom hook to use the AppContext
export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};

// export default DataContext;
