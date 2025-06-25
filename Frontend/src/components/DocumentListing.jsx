import axios from "axios";
import { Download, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function DocumentListing() {
  const [documents, setDocuments] = useState([]);
  console.log(documents);

  useEffect(() => {
    const getNoticeAll = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/NarayanMavi/getAllNotice"
        );
        if (response.status === 200) {
          setDocuments(response.data.notices);
        }
      } catch (err) {
        console.error("Error fetching documents:", err);
      }
    };

    getNoticeAll();
  }, []);

  const handleDownload = (url, filename) => {
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        alert("Failed to download file");
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold lg:ml-36 mb-5">Notice</h1>
      <div className="overflow-x-auto">
        <table className="w-[80%] lg:ml-36 border border-gray-300">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-4 px-6 text-left font-medium text-gray-700">
                S.N.
              </th>
              <th className="py-4 px-6 text-left font-medium text-gray-700">
                Title
              </th>
              <th className="py-4 px-6 text-left font-medium text-gray-700">
                File
              </th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document, index) => {
              return (
                <tr key={document._id} className="border-t border-gray-200">
                  <td className="py-4 px-6">{index + 1}.</td>
                  <td className="py-4 px-6">{document.Topic}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      {/* Download Button */}
                      <button
                        className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors"
                        onClick={() => handleDownload(document.url, fileName)}
                      >
                        <Download className="w-5 h-5" />
                        DOWNLOAD
                      </button>

                      {/* View Button */}
                      <a
                        href={`http://localhost:3000/pdf-proxy?url=${encodeURIComponent(
                          document.url
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-purple-900 hover:bg-purple-950 text-white py-2 px-4 rounded-md transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                        VIEW
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
