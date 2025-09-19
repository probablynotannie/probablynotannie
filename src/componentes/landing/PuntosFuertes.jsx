import React from "react";

function PuntosFuertes() {
  return (
    <div className="col-span-1 lg:col-span-2 relative z-10 px-6 py-12 text-white flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-glow">
        Mis puntos como desarrolladora
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="p-6 rounded-2xl bg-green-900/30 border border-green-700 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            Fortalezas
          </h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Rápido aprendizaje de nuevas tecnologías</li>
            <li>
              ✅ Curiosidad constante: disfruto investigando nuevas tendencias y
              buenas prácticas
            </li>
            <li>✅ Organización y compromiso con los proyectos</li>
            <li>✅ Pasión por el trabajo</li>
            <li>
              ✅ Proactividad: identifico mejoras y optimizo procesos cuando es
              posible si hay tiempo libre
            </li>
            <li>✅ Capacidad de trabajar de forma autónoma</li>
            <li>
              ✅ Comprensión: me esfuerzo en entender los objetivos de los demás
              para alinear mejor mi trabajo
            </li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-pink-900/30 border border-pink-700 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            Áreas de mejora
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              ⚠️ A veces me gusta alternar entre varias tareas del proyecto a la
              vez para no volverme loca
            </li>
            <li>
              ⚠️ Si lo anterior se me olvida, me quedo en bucle con una tarea
              hasta solucionarlo, es decir, me vuelvo loca :)
            </li>
            <li>
              ⚠️ Mi motivación e interes puede disminuir si percibo que el
              esfuerzo no es equitativo en el equipo
            </li>
            <li>
              ⚠️ Impaciencia: a veces me frustro si los avances son más lentos
              de lo esperado
            </li>
            <li>
              ⚠️ Pedir ayuda: me cuesta solicitar apoyo al inicio, prefiero
              intentar resolver todo sola
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PuntosFuertes;
