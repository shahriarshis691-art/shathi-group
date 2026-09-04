import type { B2BInquiryPayload } from "@/app/api/contact/route";

interface AdminInquiryNotificationProps {
  payload: B2BInquiryPayload;
  timestamp: string;
}

export function AdminInquiryNotification({
  payload,
  timestamp,
}: AdminInquiryNotificationProps) {
  const labelStyle: React.CSSProperties = {
    color: "#94a3b8",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "4px",
  };

  const valueStyle: React.CSSProperties = {
    color: "#f1f5f9",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "1.5",
    marginBottom: "16px",
    wordBreak: "break-word" as const,
  };

  const rowStyle: React.CSSProperties = {
    display: "inline-block",
    width: "48%",
    verticalAlign: "top",
    paddingRight: "12px",
  };

  return (
    <div
      style={{
        backgroundColor: "#050f1a",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: "40px 20px",
        margin: 0,
      }}
    >
      <table
        role="presentation"
        cellPadding={0}
        cellSpacing={0}
        width="100%"
        style={{ maxWidth: "640px", margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  backgroundColor: "#0f2741",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(212, 168, 78, 0.25)",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0a1c2e",
                    padding: "28px 32px",
                    borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
                    textAlign: "center" as const,
                  }}
                >
                  <h1
                    style={{
                      color: "#f1f5f9",
                      fontSize: "20px",
                      fontWeight: 700,
                      margin: "0 0 6px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    SHATHI Group
                  </h1>
                  <p
                    style={{
                      color: "#d2a84e",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase" as const,
                      margin: 0,
                    }}
                  >
                    Corporate Inquiry Notification
                  </p>
                </div>

                <div style={{ padding: "32px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "rgba(212, 168, 78, 0.12)",
                      color: "#d2a84e",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      marginBottom: "24px",
                    }}
                  >
                    New B2B Inquiry Received
                  </div>

                  <table
                    role="presentation"
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ marginBottom: "24px" }}
                  >
                    <tbody>
                      <tr>
                        <td style={rowStyle}>
                          <div style={labelStyle}>Full Name</div>
                          <div style={valueStyle}>{payload.fullName}</div>
                        </td>
                        <td style={rowStyle}>
                          <div style={labelStyle}>Corporate Email</div>
                          <div style={valueStyle}>{payload.email}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    role="presentation"
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ marginBottom: "24px" }}
                  >
                    <tbody>
                      <tr>
                        <td style={rowStyle}>
                          <div style={labelStyle}>Phone / WhatsApp</div>
                          <div style={valueStyle}>
                            {payload.phone || "Not provided"}
                          </div>
                        </td>
                        <td style={rowStyle}>
                          <div style={labelStyle}>Company Name</div>
                          <div style={valueStyle}>
                            {payload.companyName || "Not provided"}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      backgroundColor: "rgba(15, 39, 65, 0.6)",
                      borderRadius: "10px",
                      padding: "18px 20px",
                      marginBottom: "24px",
                      border: "1px solid rgba(148, 163, 184, 0.1)",
                    }}
                  >
                    <div style={labelStyle}>Target Subsidiary</div>
                    <div
                      style={{
                        color: "#f8fafc",
                        fontSize: "14px",
                        fontWeight: 600,
                        marginBottom: "12px",
                      }}
                    >
                      {payload.targetSubsidiary || "General Inquiry"}
                    </div>

                    {payload.inquiryCategory && (
                      <>
                        <div style={labelStyle}>Inquiry Category</div>
                        <div
                          style={{
                            color: "#f8fafc",
                            fontSize: "14px",
                            fontWeight: 500,
                            marginBottom: 0,
                          }}
                        >
                          {payload.inquiryCategory}
                        </div>
                      </>
                    )}
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <div style={labelStyle}>Client Message</div>
                    <div
                      style={{
                        backgroundColor: "rgba(15, 39, 65, 0.6)",
                        borderRadius: "10px",
                        padding: "18px 20px",
                        color: "#e2e8f0",
                        fontSize: "14px",
                        lineHeight: "1.65",
                        whiteSpace: "pre-wrap" as const,
                        border: "1px solid rgba(148, 163, 184, 0.1)",
                      }}
                    >
                      {payload.message}
                    </div>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid rgba(148, 163, 184, 0.15)",
                      paddingTop: "18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      Timestamp:{" "}
                      <span style={{ color: "#cbd5e1" }}>
                        {new Date(timestamp).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                    </span>
                    <span
                      style={{
                        color: "#d2a84e",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      SHATHI Group
                    </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
