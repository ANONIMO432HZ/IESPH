import {
  IconBook,
  IconBriefcase,
  IconBuilding,
  IconClock,
  IconComputer,
  IconDocument,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/components/icons/Icons"
import { INSTITUTION_CONTACT } from "@/data/institution"

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <IconComputer className="w-5 h-5 text-blue-600 dark:text-sky-300" />
      ),
      title: "Laboratorios de Computación",
      desc: "Aulas informáticas equipadas para diseño web, desarrollo de software y aplicaciones empresariales.",
    },
    {
      icon: (
        <IconBook className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
      ),
      title: "Biblioteca Especializada",
      desc: "Fondo bibliográfico técnico en ciencias de la salud, mecánica, agronomía e industrias alimentarias.",
    },
    {
      icon: (
        <IconBuilding className="w-5 h-5 text-purple-600 dark:text-purple-300" />
      ),
      title: "Talleres de Práctica Productiva",
      desc: "Ambientes dedicados al diagnóstico automotriz, enfermería clínica y procesamiento agroindustrial.",
    },
    {
      icon: (
        <IconBriefcase className="w-5 h-5 text-amber-600 dark:text-amber-300" />
      ),
      title: "Bolsa Laboral Institucional",
      desc: "Articulación con empleadores locales y regionales para prácticas y puestos de trabajo técnico.",
    },
    {
      icon: (
        <IconDocument className="w-5 h-5 text-emerald-600 dark:text-emerald-300" />
      ),
      title: "Gestión de Trámites y Certificados",
      desc: "Expedición de constancias de estudio, certificados modulares por año cursado y titulación oficial.",
    },
    {
      icon: (
        <IconDocument className="w-5 h-5 text-rose-600 dark:text-rose-300" />
      ),
      title: "Libro de Reclamaciones",
      desc: "Atención a sugerencias, observaciones y solicitudes conforme a las normas de transparencia del Estado.",
    },
  ]

  return (
    <section
      id="servicios"
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors relative"
    >
      <div id="transparencia" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Ambientes y Soporte Formativo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Servicios Complementarios e Infraestructura
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Instalaciones acondicionadas para que el estudiante consolide sus
            aprendizajes teóricos y prácticos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Campus Location Card — Dignified, Professional */}
        <div
          id="contacto"
          className="mt-10 sm:mt-14 bg-linear-to-br from-blue-50/80 via-white to-slate-100 dark:from-[#0F223A] dark:via-[#0c1b2f] dark:to-[#09182a] text-slate-900 dark:text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl transition-colors"
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4">
              <span className="text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Sede Central
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Atención Presencial en el Campus de Huanta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Visítanos en nuestra sede para conocer las aulas, talleres y
                conversar con los coordinadores de carrera sobre el proceso de
                admisión.
              </p>
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 pt-2">
                <div className="flex items-start gap-2.5">
                  <IconMapPin className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">
                      Dirección:
                    </strong>{" "}
                    {INSTITUTION_CONTACT.address}, Huanta, Ayacucho
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconPhone className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">
                      Teléfono:
                    </strong>{" "}
                    {INSTITUTION_CONTACT.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconMail className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">
                      Correo Institucional:
                    </strong>{" "}
                    {INSTITUTION_CONTACT.email}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconClock className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">
                      Horario de Secretaría:
                    </strong>{" "}
                    {INSTITUTION_CONTACT.schedule}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/80 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 space-y-4 shadow-xs dark:shadow-none">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Consultas de Admisión e Informes
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Si requieres información sobre costos de inscripción, fechas del
                examen o convalidaciones, contáctanos por nuestros canales
                oficiales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${INSTITUTION_CONTACT.phoneRaw}`}
                  className="w-full sm:w-auto min-h-11 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold py-2.5 px-5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <IconPhone className="w-3.5 h-3.5" />
                  <span>Llamar a Informes ({INSTITUTION_CONTACT.phone})</span>
                </a>
                <a
                  href={INSTITUTION_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-11 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-xs font-semibold py-2.5 px-5 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors flex items-center justify-center"
                >
                  Facebook Institucional
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
