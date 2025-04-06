
import React from "react";

const videos = [
  {
    title: "Uso de Miniscape",
    filename: "instructivo-uso-miniscape.mp4",
  },
  {
    title: "Prevención de Atropellos y Cambios",
    filename: "atropello-cambios.mp4",
  },
];

export default function Videos() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Videos Instructivos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.filename} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <video
              controls
              src={`/videos/${video.filename}`}
              className="w-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
