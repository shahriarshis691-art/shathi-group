interface ClientConfirmationEmailProps {
  clientName: string;
  clientEmail: string;
  subsidiary: string;
  timestamp: string;
}

export function ClientConfirmationEmail({
  clientName,
  clientEmail,
  subsidiary,
  timestamp,
}: ClientConfirmationEmailProps) {
  const labelStyle: React.CSSProperties = {
    color: "#64748b",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "4px",
  };

  const valueStyle: React.CSSProperties = {
    color: "#0f172a",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "1.5",
    marginBottom: "16px",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
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
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 12px 40px -8px rgba(15, 39, 65, 0.12)",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #0a1c2e 0%, #173862 50%, #1f4880 100%)",
                    padding: "36px 32px",
                    textAlign: "center" as const,
                  }}
                >
                  <h1
                    style={{
                      color: "#ffffff",
                      fontSize: "22px",
                      fontWeight: 700,
                      margin: "0 0 8px",
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
                    Corporate Desk
                  </p>
                </div>

                <div style={{ padding: "36px 32px" }}>
                  <h2
                    style={{
                      color: "#0f172a",
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: "0 0 16px",
                      lineHeight: "1.35",
                    }}
                  >
                    Thank you for your inquiry, {clientName}
                  </h2>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      margin: "0 0 24px",
                    }}
                  >
                    We have received your B2B inquiry through the SHATHI Group
                    corporate portal. Our dedicated team has been notified and
                    will review your request with the utmost priority.
                  </p>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      margin: "0 0 28px",
                    }}
                  >
                    You can expect a formal response from our corporate desk
                    within{" "}
                    <strong
                      style={{
                        color: "#0f2741",
                        fontWeight: 700,
                      }}
                    >
                      24–48 business hours
                    </strong>
                    . We appreciate your patience and look forward to exploring
                    how we can collaborate.
                  </p>

                  <div
                    style={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: "12px",
                      padding: "20px 24px",
                      marginBottom: "28px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        color: "#0f2741",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        marginBottom: "14px",
                      }}
                    >
                      Inquiry Summary
                    </div>

                    <table
                      role="presentation"
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: "6px 0",
                              verticalAlign: "top",
                              width: "38%",
                            }}
                          >
                            <span style={labelStyle}>Subsidiary</span>
                            <div style={valueStyle}>{subsidiary}</div>
                          </td>
                          <td
                            style={{
                              padding: "6px 0",
                              verticalAlign: "top",
                              width: "38%",
                            }}
                          >
                            <span style={labelStyle}>Submitted</span>
                            <div style={valueStyle}>
                              {new Date(timestamp).toLocaleString("en-IN", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      margin: "0 0 24px",
                    }}
                  >
                    Should you wish to provide additional context or supporting
                    documents, simply reply to this email. A member of the
                    SHATHI Group team will follow up shortly.
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid #e2e8f0",
                      paddingTop: "20px",
                      textAlign: "center" as const,
                    }}
                  >
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "13px",
                        fontWeight: 500,
                        margin: "0 0 8px",
                      }}
                    >
                      Warm regards,
                    </p>
                    <p
                      style={{
                        color: "#0f2741",
                        fontSize: "13px",
                        fontWeight: 700,
                        margin: "0",
                      }}
                    >
                      SHATHI Group Corporate Desk
                    </p>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "12px",
                        margin: "4px 0 0",
                      }}
                    >
                      {clientEmail}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    borderTop: "1px solid #e2e8f0",
                    padding: "18px 24px",
                    textAlign: "center" as const,
                  }}
                >
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "11px",
                      fontWeight: 500,
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    SHATHI Group of Companies
                    <br />
                    SHATHI Tower, Corporate Park, Main Business District, Bangladesh
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
