import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadCertificatePdf(
  elementId: string,
  candidateName: string = "Candidate",
  credentialId: string = "STS",
  orientation: "landscape" | "portrait" = "landscape"
): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) return false;

  try {
    const canvas = await html2canvas(element, {
      scale: 2, // 300 DPI high resolution
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowWidth: orientation === "landscape" ? 1200 : 850,
    });

    const imgData = canvas.toDataURL("image/png");
    const isLandscape = orientation === "landscape";

    const pdf = new jsPDF({
      orientation: isLandscape ? "landscape" : "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pdfWidth = isLandscape ? 297 : 210;
    const pdfHeight = isLandscape ? 210 : 297;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");

    const safeName = candidateName.replace(/[^a-zA-Z0-9]/g, "_");
    const safeId = credentialId.replace(/[^a-zA-Z0-9-]/g, "_");
    pdf.save(`SkilltoSettle_${safeName}_${safeId}.pdf`);
    return true;
  } catch (err) {
    console.error("PDF export error:", err);
    return false;
  }
}

export async function downloadCertificateImage(
  elementId: string,
  candidateName: string = "Candidate",
  credentialId: string = "STS",
  orientation: "landscape" | "portrait" = "landscape"
): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) return false;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowWidth: orientation === "landscape" ? 1200 : 850,
    });

    const safeName = candidateName.replace(/[^a-zA-Z0-9]/g, "_");
    const safeId = credentialId.replace(/[^a-zA-Z0-9-]/g, "_");
    const link = document.createElement("a");
    link.download = `SkilltoSettle_${safeName}_${safeId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    return true;
  } catch (err) {
    console.error("Image export error:", err);
    return false;
  }
}
