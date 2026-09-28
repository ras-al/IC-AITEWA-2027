"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { content } from "@/data/content";

const redLabels = [
  "Category:",
  "Paper ID / Reference:",
  "Subject:",
  "Date of Request:",
  "**Category:**",
  "**Paper ID / Reference:**",
  "**Subject:**",
  "**Date of Request:**",
];

const EmailPreview = ({ body }: { body: string }) => {
  const lines = body.split("\n");
  return (
    <div className="whitespace-pre-wrap">
      {lines.map((line, i) => {
        // Yellow highlight for "Query / Message:"
        if (
          line.startsWith("Query / Message:") ||
          line.startsWith("**Query / Message:**") ||
          line.startsWith("**QUERY / MESSAGE:**")
        ) {
          return (
            <div key={i} className="my-1">
              <span className="bg-yellow-300 text-[#1C1712] font-bold px-1.5 py-0.5 rounded-sm shadow-xs">
                {line.replace(/\*\*/g, "")}
              </span>
              {"\n"}
            </div>
          );
        }
        // Red-colored metadata labels
        const matchedLabel = redLabels.find((label) => line.startsWith(label));
        if (matchedLabel) {
          const rest = line.slice(matchedLabel.length);
          const cleanLabel = matchedLabel.replace(/\*\*/g, "");
          return (
            <div key={i} className="leading-snug">
              <span className="text-red-600 font-bold">{cleanLabel}</span>
              <span className="font-semibold text-foreground">{rest}</span>
              {"\n"}
            </div>
          );
        }
        return <span key={i}>{line}{"\n"}</span>;
      })}
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    phone: "",
    category: "Paper Submission & Extended Abstract",
    paperId: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [copied, setCopied] = useState(false);
  const [preparedEmail, setPreparedEmail] = useState({
    subject: "",
    body: "",
    htmlBody: "",
    mailtoUrl: "",
    gmailUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = formData.name.trim();
    const email = formData.email.trim();
    const affiliation = formData.affiliation.trim() || "Not specified";
    const phone = formData.phone.trim() || "Not specified";
    const category = formData.category;
    const paperId = formData.paperId.trim();
    const customSubject = formData.subject.trim();
    const message = formData.message.trim();

    const emailSubject = customSubject
      ? `[IC-AITEWA 2027 Inquiry] ${category} - ${customSubject} (${fullName})`
      : `[IC-AITEWA 2027 Inquiry] ${category} - ${fullName}`;

    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const metaLines = [
      `**Category:** ${category}`,
      paperId ? `**Paper ID / Reference:** ${paperId}` : null,
      customSubject ? `**Subject:** ${customSubject}` : null,
      `**Date of Request:** ${currentDate}`,
    ].filter(Boolean).join("\n");

    const senderLines = [
      fullName,
      affiliation !== "Not specified" ? affiliation : null,
      `${email}${phone !== "Not specified" ? ` | Tel: ${phone}` : ""}`,
    ].filter(Boolean).join("\n");

    const emailBody =
      `To:
The Organizing Committee
International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027)
Department of Mechanical Engineering, TKM College of Engineering
Kollam, Kerala, India - 691005
Official Email: icaitewa27@tkmce.ac.in | Website: https://IC-AITEWA-2027.tkmce.ac.in

Greetings.
I am writing to formally submit an inquiry regarding the upcoming International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027), organized by the Department of Mechanical Engineering, TKM College of Engineering, Kollam, in association with Sophia University, Tokyo, Japan (March 18–20, 2027).

${metaLines}

**Query / Message:**
${message}

Kindly review the above query and share the relevant details or guidance at your earliest convenience.
Thank you very much for your time and assistance.

Regards,
${senderLines}`;

    // Build HTML version with colored and bold labels for rich-text clipboard copy
    const htmlMetaLines = [
      `<strong style="color:#dc2626;font-weight:bold">Category:</strong> <b>${category}</b>`,
      paperId ? `<strong style="color:#dc2626;font-weight:bold">Paper ID / Reference:</strong> <b>${paperId}</b>` : null,
      customSubject ? `<strong style="color:#dc2626;font-weight:bold">Subject:</strong> <b>${customSubject}</b>` : null,
      `<strong style="color:#dc2626;font-weight:bold">Date of Request:</strong> <b>${currentDate}</b>`,
    ].filter(Boolean).join("<br>");

    const htmlSenderLines = [
      `<b>${fullName}</b>`,
      affiliation !== "Not specified" ? affiliation : null,
      `${email}${phone !== "Not specified" ? ` | Tel: ${phone}` : ""}`,
    ].filter(Boolean).join("<br>");

    const htmlBody = `<div style="font-family:monospace,sans-serif;font-size:13px;line-height:1.6;color:#1C1712">
<p>To:<br>
<strong>The Organizing Committee</strong><br>
International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027)<br>
Department of Mechanical Engineering, TKM College of Engineering<br>
Kollam, Kerala, India - 691005<br>
Official Email: icaitewa27@tkmce.ac.in | Website: https://IC-AITEWA-2027.tkmce.ac.in</p>

<p>Greetings.<br>
I am writing to formally submit an inquiry regarding the upcoming International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027), organized by the Department of Mechanical Engineering, TKM College of Engineering, Kollam, in association with Sophia University, Tokyo, Japan (March 18–20, 2027).</p>

<p>${htmlMetaLines}</p>

<p><span style="background-color:#fde047;color:#1C1712;font-weight:bold;padding:2px 6px;border-radius:2px">Query / Message:</span><br>
${message.replace(/\n/g, "<br>")}</p>

<p>Kindly review the above query and share the relevant details or guidance at your earliest convenience.<br>
Thank you very much for your time and assistance.</p>

<p>Regards,<br>
${htmlSenderLines}</p>
</div>`;

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    const mailtoUrl = `mailto:icaitewa27@tkmce.ac.in?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=icaitewa27@tkmce.ac.in&su=${encodedSubject}&body=${encodedBody}`;

    setPreparedEmail({
      subject: emailSubject,
      body: emailBody,
      htmlBody,
      mailtoUrl,
      gmailUrl,
    });

    setStatus("success");
    setCopied(false);

    // Launch default email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Ignore if navigation is blocked
    }
  };

  const handleCopy = async () => {
    try {
      // Copy rich HTML so pasting into Gmail/Outlook keeps the colors
      const htmlContent = `<div style="font-family:monospace;font-size:13px"><p style="font-weight:bold">Subject: ${preparedEmail.subject}</p>${preparedEmail.htmlBody}</div>`;
      const blob = new Blob([htmlContent], { type: "text/html" });
      const textBlob = new Blob([`Subject: ${preparedEmail.subject}\n\n${preparedEmail.body}`], { type: "text/plain" });
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": blob,
          "text/plain": textBlob,
        }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback to plain text copy
      try {
        await navigator.clipboard.writeText(`Subject: ${preparedEmail.subject}\n\n${preparedEmail.body}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-16">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <SectionHeading>Send an Official Inquiry</SectionHeading>

          {status === "success" ? (
            <div className="border-2 border-primary bg-primary/5 p-6 sm:p-8 space-y-6 shadow-[6px_6px_0_0_#C1502E]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-surface flex items-center justify-center font-bold text-xl shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Official Inquiry Prepared</h3>
                  <p className="font-sans text-sm text-foreground/80 mt-1">
                    Your email client has been prompted with the drafted formal communication. If your mail client did not open automatically, choose an option below:
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={preparedEmail.mailtoUrl}
                  className="inline-flex items-center justify-center px-4 py-3 bg-foreground text-surface text-xs font-bold uppercase tracking-wider hover:bg-foreground/80 transition-colors text-center"
                >
                  Open Mail App
                </a>

                <a
                  href={preparedEmail.gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-[#EA4335] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D93025] transition-colors text-center"
                >
                  Open in Gmail (Web)
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="sm:col-span-2 inline-flex items-center justify-center px-4 py-3 border-2 border-foreground bg-surface text-foreground text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-surface transition-colors text-center"
                >
                  {copied ? "✓ Copied to Clipboard (with Colors & Bold)!" : "Copy Formatted Letter (with Colors & Bold)"}
                </button>
              </div>

              {/* Formatting guidance tip */}
              <div className="bg-primary/5 border border-primary/20 p-3.5 text-xs text-foreground/80 leading-relaxed flex items-start gap-2.5">
                <span className="text-primary font-bold text-sm shrink-0">💡</span>
                <p>
                  <strong>Tip:</strong> Direct mail app links use <strong>bold text tags</strong> (as mail clients do not accept colored text via URL). To send with full <strong>red labels and yellow highlight</strong> exactly as previewed, click <strong>&quot;Copy Formatted Letter&quot;</strong> and paste (<kbd className="font-mono bg-foreground/10 px-1 py-0.5 rounded text-[11px]">Ctrl+V</kbd>) into your compose box.
                </p>
              </div>

              {/* Email Preview */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">Drafted Academic Letter Preview</span>
                  <span className="font-sans text-xs text-foreground/60">To: icaitewa27@tkmce.ac.in</span>
                </div>
                <div className="bg-surface border border-foreground/20 p-4 max-h-80 overflow-y-auto font-mono text-xs text-foreground/90 leading-relaxed">
                  <div className="font-bold text-foreground mb-2 pb-2 border-b border-foreground/10">
                    Subject: {preparedEmail.subject}
                  </div>
                  <EmailPreview body={preparedEmail.body} />
                </div>
              </div>

              {/* Reset/Edit Button */}
              <div className="pt-2 flex justify-between items-center text-xs font-sans">
                <button
                  onClick={() => setStatus("idle")}
                  className="font-bold tracking-wider uppercase underline hover:text-primary transition-colors cursor-pointer"
                >
                  ← Edit or Send Another Message
                </button>
                <span className="text-foreground/60">IC-AITEWA 2027</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Prof. / Dr. Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                    Official Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="author@university.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="affiliation" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                    Designation & Institution <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    required
                    value={formData.affiliation}
                    onChange={handleChange}
                    className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Associate Professor, TKMCE / IIT / Org"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                    Phone / WhatsApp <span className="text-foreground/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="category" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                    Inquiry Category <span className="text-primary">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Paper Submission & Extended Abstract">Paper Submission & Extended Abstract</option>
                    <option value="Review Status & Camera-Ready Submission">Review Status & Camera-Ready Submission</option>
                    <option value="Registration, Fees & Invoicing">Registration, Fees & Invoicing</option>
                    <option value="Travel, Visa & Accommodation Assistance">Travel, Visa & Accommodation Assistance</option>
                    <option value="Sponsorship & Industry Partnership">Sponsorship & Industry Partnership</option>
                    <option value="Keynote & Technical Sessions">Keynote & Technical Sessions</option>
                    <option value="General Conference Inquiry">General Conference Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="paperId" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                    Paper ID <span className="text-foreground/40 font-normal">(If any)</span>
                  </label>
                  <input
                    type="text"
                    id="paperId"
                    name="paperId"
                    value={formData.paperId}
                    onChange={handleChange}
                    className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="e.g. AITEWA-102"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                  Subject / Topic Summary <span className="text-foreground/40 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="e.g. Query regarding Track 2 Extended Abstract submission"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs font-bold uppercase tracking-wider mb-2">
                  Message / Inquiry Details <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="Please state your inquiry with any relevant details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-sm tracking-widest uppercase transition-colors duration-200 border-2 bg-foreground border-foreground text-surface hover:bg-foreground/80 hover:border-foreground/80 cursor-pointer"
              >
                Draft & Send Official Message →
              </button>
            </form>
          )}
        </div>

        <div>
          <SectionHeading>Organizing Committee & Contacts</SectionHeading>

          <div className="bg-foreground text-surface p-8 mb-8 flex flex-col sm:flex-row items-start justify-between gap-6 shadow-[8px_8px_0_0_#C1502E]">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Postal Address</h3>
              <p className="font-sans leading-relaxed text-surface/80">
                Department of Mechanical Engineering<br />
                TKM College of Engineering<br />
                Karicode, Kollam<br />
                Kerala, India &ndash; 691005
              </p>
            </div>
            <img
              src="/ai_aictc.png"
              alt="IC-AITEWA Conference Logo"
              className="w-28 h-auto object-contain shrink-0 opacity-90 self-center sm:self-start"
            />
          </div>

          <div className="border-2 border-foreground p-8 bg-surface shadow-[8px_8px_0_0_#1C1712]">
            <h3 className="font-serif text-2xl font-bold mb-6">For Enquiries</h3>

            <div className="space-y-6">
              {content.contacts.map((contact, idx) => (
                <div key={idx} className="border-b border-foreground/10 pb-5 last:border-b-0 last:pb-0">
                  <p className="font-sans font-bold text-xs tracking-widest uppercase text-primary mb-1">{contact.role}</p>
                  <p className="font-serif font-bold text-lg text-foreground">{contact.name}</p>
                  <p className="font-sans text-xs sm:text-sm text-foreground/70 mb-2">{contact.designation}</p>
                  <div className="space-y-1 font-sans text-sm">
                    <p>
                      <span className="font-medium text-foreground/60">Email: </span>
                      <a href={`mailto:${contact.email}`} className="text-primary hover:underline font-medium">
                        {contact.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground/60">Phone: </span>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t-2 border-foreground/10 space-y-2">
                <div>
                  <p className="font-sans font-bold text-xs tracking-widest uppercase text-primary mb-1">Official Conference Mail</p>
                  <a href={`mailto:${content.conference.email}`} className="font-sans text-base font-bold text-foreground hover:text-primary transition-colors">
                    {content.conference.email}
                  </a>
                </div>
                <div className="pt-2">
                  <p className="font-sans font-bold text-xs tracking-widest uppercase text-primary mb-1">Official Website</p>
                  <a href={content.conference.website} target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium text-foreground hover:text-primary underline">
                    {content.conference.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
