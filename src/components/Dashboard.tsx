
import { useState } from "react";
import { cn } from "@/lib/utils";

const healthRecords = [
  {
    category: "Allergies",
    data: [
      { name: "Penicillin", severity: "High", verified: true },
      { name: "Peanuts", severity: "Medium", verified: true },
      { name: "Latex", severity: "Low", verified: false },
    ],
  },
  {
    category: "Medications",
    data: [
      { name: "Lisinopril", dosage: "10mg daily", verified: true },
      { name: "Metformin", dosage: "500mg twice daily", verified: true },
      { name: "Atorvastatin", dosage: "20mg at bedtime", verified: true },
    ],
  },
  {
    category: "Immunizations",
    data: [
      { name: "Influenza", date: "11/15/2023", verified: true },
      { name: "COVID-19", date: "05/20/2023", verified: true },
      { name: "Tdap", date: "07/12/2020", verified: true },
    ],
  },
  {
    category: "Conditions",
    data: [
      { name: "Hypertension", status: "Managed", verified: true },
      { name: "Type 2 Diabetes", status: "Active", verified: true },
      { name: "Asthma", status: "Controlled", verified: false },
    ],
  },
];

// Permission request mockup
const accessRequests = [
  {
    provider: "Memorial Hospital ER",
    timestamp: "Just now",
    requestedData: ["Allergies", "Medications", "Blood Type"],
    urgent: true,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sharing, setSharing] = useState(false);

  const handleEmergencyAccess = () => {
    setSharing(true);
    setTimeout(() => {
      setSharing(false);
    }, 2000);
  };

  return (
    <section id="dashboard" className="py-20 md:py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-health-background to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-health-primary bg-health-primary/10 rounded-full">
            Dashboard Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your Health at a Glance
          </h2>
          <p className="text-lg text-gray-600">
            Access and manage your health data securely from anywhere.
          </p>
        </div>

        <div className="glass-panel max-w-5xl mx-auto overflow-hidden shadow-elevated">
          {/* Dashboard Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 12.0002H12.2V15.0002H11.8V12.0002H8.8V11.6002H11.8V8.6002H12.2V11.6002H15.2V12.0002Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.4"
                  />
                  <path
                    d="M14.0834 17.3102H9.91675C9.69996 17.3102 9.51247 17.1202 9.52052 16.9044L9.75383 10.1346C9.75383 10.1346 9.49171 8.03361 11.9854 8.00015H12.0146C14.5083 8.03361 14.2462 10.1346 14.2462 10.1346L14.4795 16.9044C14.4875 17.1202 14.3 17.3102 14.0834 17.3102Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 13.307C3.93646 12.1469 3.40982 10.8576 3.13175 9.74442C2.85334 8.63123 2.84327 7.70985 3.10445 7.03388C3.36277 6.36534 3.87729 5.95594 4.62447 5.84898C5.36453 5.74333 6.20349 6.05371 7.16003 6.87567C7.98823 5.60856 8.97463 5.05845 10.0371 5.01419C11.1004 4.96992 11.9999 5.44045 12.4445 6.16295"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 6C12 6 12.3086 4.20736 14.2392 4.01223C16.1697 3.8171 17.2351 5.87254 17.5 6.5C17.7649 7.12746 20.9045 10.7767 17.5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.00048 20.0002H17.0005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Health Record</h3>
                <p className="text-sm text-gray-500">Securely managed on blockchain</p>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <button 
                className="bg-health-danger/10 text-health-danger px-4 py-2 rounded-lg text-sm font-medium mr-3 flex items-center hover:bg-health-danger/20 transition-colors focus-ring"
                onClick={handleEmergencyAccess}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5"
                >
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Emergency Access
              </button>
              <button className="bg-health-primary/10 text-health-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-health-primary/20 transition-colors focus-ring">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5"
                >
                  <path
                    d="M15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8M15 8C15 9.65685 13.6569 11 12 11M15 8H19C19.5523 8 20 8.44772 20 9V13.5M9 8C9 9.65685 10.3431 11 12 11M9 8H5C4.44772 8 4 8.44772 4 9V13.5M12 11V14M12 22C16.4183 22 20 18.4183 20 14V13.5M12 22C7.58172 22 4 18.4183 4 14V13.5M12 22C10.3431 22 9 20.6569 9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19C15 20.6569 13.6569 22 12 22ZM20 13.5C18.8954 13.5 18 12.6046 18 11.5C18 10.3954 18.8954 9.5 20 9.5C21.1046 9.5 22 10.3954 22 11.5C22 12.6046 21.1046 13.5 20 13.5ZM4 13.5C2.89543 13.5 2 12.6046 2 11.5C2 10.3954 2.89543 9.5 4 9.5C5.10457 9.5 6 10.3954 6 11.5C6 12.6046 5.10457 13.5 4 13.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Manage Access
              </button>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div className="bg-white border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {["overview", "records", "permissions", "activity"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium border-b-2 min-w-max focus-ring",
                    activeTab === tab
                      ? "border-health-primary text-health-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white p-6">
            {/* Access Requests Section */}
            {accessRequests.length > 0 && (
              <div className="mb-6 bg-health-danger/5 border border-health-danger/20 rounded-lg p-4">
                <h4 className="text-base font-medium text-gray-900 mb-2 flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 text-health-danger"
                  >
                    <path
                      d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Pending Access Request ({accessRequests.length})
                </h4>
                {accessRequests.map((request, index) => (
                  <div
                    key={index}
                    className="bg-white rounded border border-gray-200 p-3 mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-medium">{request.provider}</span>
                        {request.urgent && (
                          <span className="ml-2 text-xs bg-health-danger text-white px-2 py-0.5 rounded-full">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span>{request.timestamp}</span>
                        <span className="mx-1">•</span>
                        <span>
                          Requesting: {request.requestedData.join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="flex mt-3 sm:mt-0">
                      <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm mr-2 hover:bg-gray-200 transition-colors focus-ring">
                        Deny
                      </button>
                      <button 
                        className="bg-health-primary text-white px-3 py-1 rounded text-sm hover:bg-health-primary/90 transition-colors focus-ring"
                        onClick={handleEmergencyAccess}
                      >
                        {sharing ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sharing...
                          </span>
                        ) : (
                          "Approve"
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Health Records Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {healthRecords.map((record) => (
                <div
                  key={record.category}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">
                      {record.category}
                    </h4>
                    <button className="text-health-primary hover:text-health-secondary focus-ring">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12V12.01M12 6V6.01M12 18V18.01M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {record.data.map((item, index) => (
                      <div key={index} className="px-4 py-3 flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.severity || item.dosage || item.date || item.status}
                          </p>
                        </div>
                        {item.verified ? (
                          <div className="text-health-success flex items-center text-sm">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-1"
                            >
                              <path
                                d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z"
                                fill="currentColor"
                              />
                              <path
                                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                fill="currentColor"
                              />
                            </svg>
                            Verified
                          </div>
                        ) : (
                          <div className="text-amber-500 flex items-center text-sm">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-1"
                            >
                              <path
                                d="M12 9V13M12 17H12.01M3.44722 20.5528C1.56709 18.6726 2.37534 15.4888 3.20479 13.0024C4.07669 10.3843 5.04524 7.78403 6.10251 5.21599C7.04134 2.92136 9.3286 2.82541 10.4286 2.76978L10.5 2.76654C10.9833 2.74291 11.5084 2.7193 12 2.7193C12.4916 2.7193 13.0167 2.74291 13.5 2.76654L13.5714 2.76978C14.6714 2.82541 16.9587 2.92136 17.8975 5.21599C18.9548 7.78403 19.9233 10.3843 20.7952 13.0024C21.6247 15.4888 22.4329 18.6726 20.5528 20.5528C18.6726 22.4329 15.4888 21.6247 13.0024 20.7952C10.3843 19.9233 7.78403 18.9548 5.21599 17.8975C2.92136 16.9587 2.82541 14.6714 2.76978 13.5714L2.76654 13.5C2.74291 13.0167 2.7193 12.4916 2.7193 12C2.7193 11.5084 2.74291 10.9833 2.76654 10.5L2.76978 10.4286C2.82541 9.3286 2.92136 7.04134 5.21599 6.10251C7.78403 5.04524 10.3843 4.07669 13.0024 3.20479C15.4888 2.37534 18.6726 1.56709 20.5528 3.44722C22.4329 5.32736 21.6247 8.51118 20.7952 10.9976C19.9233 13.6157 18.9548 16.216 17.8975 18.784C16.9587 21.0786 14.6714 21.1746 13.5714 21.2302L13.5 21.2335C13.0167 21.2571 12.4916 21.2807 12 21.2807C11.5084 21.2807 10.9833 21.2571 10.5 21.2335L10.4286 21.2302C9.3286 21.1746 7.04134 21.0786 6.10251 18.784C5.04524 16.216 4.07669 13.6157 3.20479 10.9976C2.37534 8.51118 1.56709 5.32736 3.44722 3.44722"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Pending
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                    <button className="text-health-primary text-sm font-medium hover:text-health-secondary transition-colors focus-ring">
                      View All
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
