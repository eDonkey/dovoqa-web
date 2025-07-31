import Image from "next/image"
import Link from "next/link"

export default function EmailSignaturePage() {
  const name = "John Doe"
  const title = "CEO & Founder"
  const company = "DovoQA"
  const website = "dovoqa.com"
  const email = "john.doe@dovoqa.com"
  const phone = "+1 (555) 123-4567"
  const linkedin = "https://linkedin.com/in/johndoe"
  const twitter = "https://twitter.com/johndoe"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">DovoQA Email Signatures</h1>

      {/* Simple Signature */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Simple Signature</h2>
        <div className="font-sans text-sm text-gray-800">
          <p className="font-bold text-base">{name}</p>
          <p>
            {title} | {company}
          </p>
          <p>
            <Link href={`mailto:${email}`} className="text-blue-600 hover:underline">
              {email}
            </Link>
          </p>
          <p>
            <Link href={`tel:${phone}`} className="text-blue-600 hover:underline">
              {phone}
            </Link>
          </p>
          <p>
            <Link
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {website}
            </Link>
          </p>
        </div>
      </div>

      {/* Professional Signature */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Professional Signature</h2>
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            color: "#333333",
            lineHeight: "18px",
            width: "100%",
          }}
        >
          <tbody>
            <tr>
              <td style={{ paddingRight: "10px", verticalAlign: "top" }}>
                <Image
                  src="/placeholder-logo.png"
                  alt={`${company} Logo`}
                  width={70}
                  height={70}
                  style={{ display: "block", borderRadius: "8px" }}
                />
              </td>
              <td style={{ verticalAlign: "top" }}>
                <p style={{ margin: "0", padding: "0", fontSize: "14px", fontWeight: "bold", color: "#007bff" }}>
                  {name}
                </p>
                <p style={{ margin: "0", padding: "0", fontSize: "12px", color: "#555555" }}>
                  {title} | {company}
                </p>
                <p style={{ margin: "0", padding: "0" }}>
                  <Link href={`mailto:${email}`} style={{ color: "#007bff", textDecoration: "none" }}>
                    {email}
                  </Link>
                </p>
                <p style={{ margin: "0", padding: "0" }}>
                  <Link href={`tel:${phone}`} style={{ color: "#007bff", textDecoration: "none" }}>
                    {phone}
                  </Link>
                </p>
                <p style={{ margin: "0", padding: "0" }}>
                  <Link
                    href={`https://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    {website}
                  </Link>
                </p>
                <div style={{ marginTop: "5px" }}>
                  {linkedin && (
                    <Link href={linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: "5px" }}>
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        style={{ verticalAlign: "middle" }}
                      />
                    </Link>
                  )}
                  {twitter && (
                    <Link href={twitter} target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Twitter"
                        width={20}
                        height={20}
                        style={{ verticalAlign: "middle" }}
                      />
                    </Link>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
