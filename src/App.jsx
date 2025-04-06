
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { PlayCircle, FileText, Megaphone, AlertTriangle, Newspaper, ClipboardList } from "lucide-react";

export default function SeguridadApp() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex items-center">
        <img src="/Logo_Fepasa2.png" alt="Fepasa Logo" className="w-48 h-auto" />
        <h1 className="text-3xl font-bold text-blue-600 ml-4">Portal de Seguridad</h1>
      </header>

      <main className="p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-t-4 border-blue-600 hover:shadow-xl transition">
            <CardContent className="flex flex-col items-center text-center">
              <PlayCircle className="w-12 h-12 mb-2 text-blue-600" />
              <h2 className="text-xl font-bold mb-1">Videos Instructivos</h2>
              <p className="text-sm mb-4">Revisa videos prácticos sobre tareas seguras.</p>
              <a href="/videos" className="w-full">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Ver Videos</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-red-600 hover:shadow-xl transition">
            <CardContent className="flex flex-col items-center text-center">
              <FileText className="w-12 h-12 mb-2 text-red-600" />
              <h2 className="text-xl font-bold mb-1">Procedimientos</h2>
              <p className="text-sm mb-4">Accede a los pasos correctos para cada tarea.</p>
              <Button className="bg-red-600 hover:bg-red-700 w-full">Ver Procedimientos</Button>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-green-600 hover:shadow-xl transition">
            <CardContent className="flex flex-col items-center text-center">
              <Megaphone className="w-12 h-12 mb-2 text-green-600" />
              <h2 className="text-xl font-bold mb-1">Campañas</h2>
              <p className="text-sm mb-4">Información y recordatorios sobre seguridad laboral.</p>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Ver Campañas</Button>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-purple-600 hover:shadow-xl transition">
            <CardContent className="flex flex-col items-center text-center">
              <ClipboardList className="w-12 h-12 mb-2 text-purple-600" />
              <h2 className="text-xl font-bold mb-1">Encuestas</h2>
              <p className="text-sm mb-4">Responde encuestas de capacitación y retroalimentación.</p>
              <a href="https://forms.office.com/r/eiTwZ3v15g?origin=lprLink" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">Ir a Encuestas</Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-yellow-500">
            <CardContent>
              <div className="flex items-center mb-2">
                <AlertTriangle className="text-yellow-500 w-6 h-6 mr-2" />
                <h2 className="text-lg font-bold">Alertas de Seguridad</h2>
              </div>
              <ul className="list-disc list-inside text-sm">
                <li>Zona de descarga cerrada temporalmente por mantenimiento.</li>
                <li>Uso obligatorio de casco y guantes en Patio Sur.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-400">
            <CardContent>
              <div className="flex items-center mb-2">
                <Newspaper className="text-blue-400 w-6 h-6 mr-2" />
                <h2 className="text-lg font-bold">Noticias de Seguridad</h2>
              </div>
              <ul className="list-disc list-inside text-sm">
                <li>Nuevo protocolo de evacuación implementado desde abril.</li>
                <li>Se capacitaron 60 trabajadores en manejo de extintores.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
