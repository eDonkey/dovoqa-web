"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EmailSignatureGenerator() {
  const [name, setName] = useState("Your Name")
  const [title, setTitle] = useState("Your Title")
  const [company, setCompany] = useState("Your Company")
  const [phone, setPhone] = useState("+1 (123) 456-7890")
  const [email, setEmail] = useState("your.email@example.com")
  const [website, setWebsite] = useState("www.example.com")
  const [address, setAddress] = useState("123 Main St, Anytown, USA")
  const [linkedin, setLinkedin] = useState("yourlinkedin")
  const [twitter, setTwitter] = useState("yourtwitter")
  const [facebook, setFacebook] = useState("yourfacebook")

  const generateHtmlSignature = () => {
    return `
      <div style="font-family: Arial, sans-serif; font-size: 12px; color: #333;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 400px;">
          <tr>
            <td style="padding-right: 10px; vertical-align: top;">
              <img src="https://via.placeholder.com/80x80" alt="Logo" width="80" height="80" style="display: block; border-radius: 50%;">
            </td>
            <td style="vertical-align: top;">
              <p style="margin: 0; font-size: 14px; font-weight: bold; color: #007bff;">${name}</p>
              <p style="margin: 0; color: #555;">${title}</p>
              <p style="margin: 0; color: #555;">${company}</p>
              <p style="margin: 0; line-height: 1.5;">
                <span style="color: #007bff;">&#9742;</span> <a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a><br>
                <span style="color: #007bff;">&#9993;</span> <a href="mailto:${email}" style="color: #333; text-decoration: none;">${email}</a><br>
                <span style="color: #007bff;">&#127760;</span> <a href="http://${website}" target="_blank" style="color: #333; text-decoration: none;">${website}</a><br>
                <span style="color: #007bff;">&#128205;</span> ${address}
              </p>
              <p style="margin: 5px 0 0 0;">
                ${linkedin ? `<a href="https://linkedin.com/in/${linkedin}" target="_blank" style="text-decoration: none; margin-right: 5px;"><img src="https://via.placeholder.com/20x20/007bff/ffffff?text=L" alt="LinkedIn" width="20" height="20" style="vertical-align: middle;"></a>` : ""}
                ${twitter ? `<a href="https://twitter.com/${twitter}" target="_blank" style="text-decoration: none; margin-right: 5px;"><img src="https://via.placeholder.com/20x20/1DA1F2/ffffff?text=T" alt="Twitter" width="20" height="20" style="vertical-align: middle;"></a>` : ""}
                ${facebook ? `<a href="https://facebook.com/${facebook}" target="_blank" style="text-decoration: none;"><img src="https://via.placeholder.com/20x20/1877F2/ffffff?text=F" alt="Facebook" width="20" height="20" style="vertical-align: middle;"></a>` : ""}
              </p>
            </td>
          </tr>
        </table>
      </div>
    `
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Signature copied to clipboard!")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Email Signature Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn Username</Label>
            <Input id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="twitter">Twitter Username</Label>
            <Input id="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="facebook">Facebook Username</Label>
            <Input id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
          </div>
        </div>

        {/* Preview and HTML Output */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Preview</h2>
          <div
            className="border p-4 rounded-md bg-gray-50"
            dangerouslySetInnerHTML={{ __html: generateHtmlSignature() }}
          />

          <h2 className="text-2xl font-bold">HTML Code</h2>
          <Textarea value={generateHtmlSignature()} readOnly rows={15} className="font-mono text-sm bg-gray-50" />
          <Button onClick={() => copyToClipboard(generateHtmlSignature())}>Copy HTML to Clipboard</Button>
        </div>
      </div>
    </div>
  )
}
