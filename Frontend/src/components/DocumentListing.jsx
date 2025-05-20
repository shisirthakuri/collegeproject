
import { Download, Eye } from "lucide-react"

export default function DocumentListing() {
  const documents = [
    {
      id: 1,
      serialNumber: "1",
      title: "Academic Calender 2081/82",
      file: "/path-to-file-1.pdf",
    },
    {
      id: 2,
      serialNumber: "2",
      title: "Omega Prospectus 2081",
      file: "/path-to-file-2.pdf",
    },
  ]

  return (
    <div className="container mx-auto p-4 mt-20">
        <h1 className="text-2xl font-bold ml-36 mb-5">Notice</h1>
      <div className="overflow-x-auto">
        <table className="w-[80%]  ml-36 border border-gray-300">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-4 px-6 text-left font-medium text-gray-700">S.N.</th>
              <th className="py-4 px-6 text-left font-medium text-gray-700">Title</th>
              <th className="py-4 px-6 text-left font-medium text-gray-700">File</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <tr key={document.id} className="border-t border-gray-200">
                <td className="py-4 px-6">{document.serialNumber}</td>
                <td className="py-4 px-6">{document.title}</td>
                <td className="py-4 px-6">
                  <div className="flex gap-2 ">
                    <button
                      className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors"
                      onClick={() => window.open(document.file, "_blank")}
                    >
                      <Download className="w-5 h-5" />
                      DOWNLOAD
                    </button>
                    <button
                      className="flex items-center gap-2 bg-purple-900 hover:bg-purple-950 text-white py-2 px-4 rounded-md transition-colors"
                      onClick={() => window.open(document.file, "_blank")}
                    >
                      <Eye className="w-5 h-5" />
                      VIEW
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
