import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Email Signature - Dovoqa",
  description: "Professional email signature for Dovoqa team members",
}

export default function EmailSignaturePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Dovoqa Email Signatures</h1>

          {/* Full Signature */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Full Email Signature</h2>
            <div className="border-2 border-dashed border-gray-300 p-6 mb-4">
              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                  lineHeight: "1.4",
                  color: "#333",
                }}
              >
                <table style={{ borderCollapse: "collapse" }}>
                  <tbody>
                    <tr>
                      <td style={{ paddingRight: "15px", verticalAlign: "top" }}>
                        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
                          <path
                            d="M35 35 L45 25 L55 35 L65 25 L75 35 L65 45 L75 55 L65 65 L55 55 L45 65 L35 55 L45 45 Z"
                            fill="white"
                          />
                          <circle cx="50" cy="50" r="8" fill="#2563eb" />
                        </svg>
                      </td>
                      <td style={{ verticalAlign: "top" }}>
                        <div style={{ fontSize: "18px", fontWeight: "600", color: "#1a1a1a", margin: "0 0 2px 0" }}>
                          Axel
                        </div>
                        <div style={{ fontSize: "14px", color: "#666", margin: "0 0 8px 0" }}>Founder & QA Lead</div>
                        <div style={{ fontSize: "16px", fontWeight: "600", color: "#2563eb", margin: "0 0 8px 0" }}>
                          dovoqa.com
                        </div>

                        <div style={{ fontSize: "13px", color: "#666" }}>
                          📧{" "}
                          <a href="mailto:axel@dovoqa.com" style={{ color: "#2563eb", textDecoration: "none" }}>
                            axel@dovoqa.com
                          </a>
                          <br />📱{" "}
                          <a href="tel:+5491132346592" style={{ color: "#2563eb", textDecoration: "none" }}>
                            +54 9 11 3234 6592
                          </a>
                          <br />🌐{" "}
                          <a href="https://dovoqa.com" style={{ color: "#2563eb", textDecoration: "none" }}>
                            dovoqa.com
                          </a>
                          <br />📍 CABA, Buenos Aires, Argentina
                        </div>

                        <div style={{ margin: "8px 0", height: "1px", background: "#e5e7eb" }}></div>
                        <div style={{ fontSize: "12px", color: "#888", fontStyle: "italic" }}>
                          Quality Assurance as a Service for Software Development
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">HTML Code (Copy this for your email client):</h3>
              <textarea
                className="w-full h-40 p-2 text-sm font-mono border rounded"
                readOnly
                value={`<table style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.4; color: #333; border-collapse: collapse;">
  <tr>
    <td style="padding-right: 15px; vertical-align: top;">
      <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2"/>
        <path d="M35 35 L45 25 L55 35 L65 25 L75 35 L65 45 L75 55 L65 65 L55 55 L45 65 L35 55 L45 45 Z" fill="white"/>
        <circle cx="50" cy="50" r="8" fill="#2563eb"/>
      </svg>
    </td>
    <td style="vertical-align: top;">
      <div style="font-size: 18px; font-weight: 600; color: #1a1a1a; margin: 0 0 2px 0;">Axel</div>
      <div style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Founder & QA Lead</div>
      <div style="font-size: 16px; font-weight: 600; color: #2563eb; margin: 0 0 8px 0;">dovoqa.com</div>
      <div style="font-size: 13px; color: #666;">
        📧 <a href="mailto:axel@dovoqa.com" style="color: #2563eb; text-decoration: none;">axel@dovoqa.com</a><br>
        📱 <a href="tel:+5491132346592" style="color: #2563eb; text-decoration: none;">+54 9 11 3234 6592</a><br>
        🌐 <a href="https://dovoqa.com" style="color: #2563eb; text-decoration: none;">dovoqa.com</a><br>
        📍 CABA, Buenos Aires, Argentina
      </div>
      <div style="margin: 8px 0; height: 1px; background: #e5e7eb;"></div>
      <div style="font-size: 12px; color: #888; font-style: italic;">Quality Assurance as a Service for Software Development</div>
    </td>
  </tr>
</table>`}
              />
            </div>
          </div>

          {/* Simple Signature */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4">Simple Email Signature</h2>
            <div className="border-2 border-dashed border-gray-300 p-6 mb-4">
              <table
                style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333", borderCollapse: "collapse" }}
              >
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "15px", verticalAlign: "top" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "#2563eb",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        D
                      </div>
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      <div style={{ fontSize: "16px", fontWeight: "bold", color: "#1a1a1a", marginBottom: "2px" }}>
                        Axel
                      </div>
                      <div style={{ color: "#666", marginBottom: "6px" }}>Founder & QA Lead | dovoqa.com</div>
                      <div style={{ fontSize: "12px", color: "#666" }}>
                        📧{" "}
                        <a href="mailto:axel@dovoqa.com" style={{ color: "#2563eb", textDecoration: "none" }}>
                          axel@dovoqa.com
                        </a>{" "}
                        | 📱{" "}
                        <a href="tel:+5491132346592" style={{ color: "#2563eb", textDecoration: "none" }}>
                          +54 9 11 3234 6592
                        </a>
                        <br />🌐{" "}
                        <a href="https://dovoqa.com" style={{ color: "#2563eb", textDecoration: "none" }}>
                          dovoqa.com
                        </a>{" "}
                        | 📍 Buenos Aires, Argentina
                      </div>
                      <div style={{ fontSize: "11px", color: "#888", fontStyle: "italic", marginTop: "6px" }}>
                        Quality Assurance as a Service for Software Development
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">HTML Code (Copy this for your email client):</h3>
              <textarea
                className="w-full h-32 p-2 text-sm font-mono border rounded"
                readOnly
                value={`<table style="font-family: Arial, sans-serif; font-size: 13px; color: #333; border-collapse: collapse;">
  <tr>
    <td style="padding-right: 15px; vertical-align: top;">
      <div style="width: 40px; height: 40px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px;">D</div>
    </td>
    <td style="vertical-align: top;">
      <div style="font-size: 16px; font-weight: bold; color: #1a1a1a; margin-bottom: 2px;">Axel</div>
      <div style="color: #666; margin-bottom: 6px;">Founder & QA Lead | dovoqa.com</div>
      <div style="font-size: 12px; color: #666;">
        📧 <a href="mailto:axel@dovoqa.com" style="color: #2563eb; text-decoration: none;">axel@dovoqa.com</a> | 
        📱 <a href="tel:+5491132346592" style="color: #2563eb; text-decoration: none;">+54 9 11 3234 6592</a><br>
        🌐 <a href="https://dovoqa.com" style="color: #2563eb; text-decoration: none;">dovoqa.com</a> | 
        📍 Buenos Aires, Argentina
      </div>
      <div style="font-size: 11px; color: #888; font-style: italic; margin-top: 6px;">Quality Assurance as a Service for Software Development</div>
    </td>
  </tr>
</table>`}
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold mb-3">How to Use These Signatures:</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Gmail:</strong> Settings → General → Signature → Paste HTML code
              </p>
              <p>
                <strong>Outlook:</strong> File → Options → Mail → Signatures → New → Paste HTML code
              </p>
              <p>
                <strong>Apple Mail:</strong> Mail → Preferences → Signatures → Copy and paste the rendered signature
              </p>
              <p>
                <strong>Other clients:</strong> Look for HTML signature option and paste the code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
