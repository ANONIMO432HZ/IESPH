import { INSTITUTION_CONTACT } from "@/data/institution"
import {
  IconComputer,
  IconBook,
  IconBriefcase,
  IconDocument,
  IconBuilding,
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
} from "@/components/icons/Icons"

export default function ServicesSection() {
  const services = [
    {
      icon: <IconComputer className="w-5 h-5 text-slate-700" />,
      title: "Laboratorios de Computación",
      desc: "Aulas informáticas equipadas para diseño web, desarrollo de software y aplicaciones empresariales.",
    },
    {
      icon: <IconBook className="w-5 h-5 text-slate-700" />,
      title: "Biblioteca Especializada",
      desc: "Fondo bibliográfico técnico en ciencias de la salud, mecánica, agronomía e industrias alimentarias.",
    },
    {
      icon: <IconBuilding className="w-5 h-5 text-slate-700" />,
      title: "Talleres de Práctica Productiva",
      desc: "Ambientes dedicados al diagnóstico automotriz, enfermería clínica y procesamiento agroindustrial.",
    },
    {
      icon: <IconBriefcase className="w-5 h-5 text-slate-700" />,
      title: "Bolsa Laboral Institucional",
      desc: "Articulación con empleadores locales y regionales para prácticas y puestos de trabajo técnico.",
    },
    {
      icon: <IconDocument className="w-5 h-5 text-slate-700" />,
      title: "Gestión de Trámites y Certificados",
      desc: "Expedición de constancias de estudio, certificados modulares por año cursado y titulación oficial.",
    },
    {
      icon: <IconDocument className="w-5 h-5 text-slate-700" />,
      title: "Libro de Reclamaciones",
      desc: "Atención a sugerencias, observaciones y solicitudes conforme a las normas de transparencia del Estado.",
    },
  ]

  return (
    <section
      id="servicios"
      className="py-20 bg-slate-50 border-b border-slate-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Ambientes y Soporte Formativo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Servicios Complementarios e Infraestructura
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Instalaciones acondicionadas para que el estudiante consolide sus
            aprendizajes teóricos y prácticos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Campus Location Card — Dignified, Professional */}
        <div
          id="contacto"
          className="mt-14 bg-[#0F223A] text-white rounded-2xl p-8 sm:p-10 border border-slate-800"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Sede Central
              </span>
              <h3 className="text-2xl font-bold">
                Atención Presencial en el Campus de Huanta
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Visítanos en nuestra sede para conocer las aulas, talleres y
                conversar con los coordinadores de carrera sobre el proceso de
                admisión.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2.5">
                  <IconMapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>
                    <strong>Dirección:</strong> {INSTITUTION_CONTACT.address},
                    Huanta, Ayacucho
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconPhone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>
                    <strong>Teléfono:</strong> {INSTITUTION_CONTACT.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconMail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>
                    <strong>Correo Institucional:</strong>{" "}
                    {INSTITUTION_CONTACT.email}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconClock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>
                    <strong>Horario de Secretaría:</strong>{" "}
                    {INSTITUTION_CONTACT.schedule}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-4">
              <h4 className="text-sm font-bold text-white">
                Consultas de Admisión e Informes
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si requieres información sobre costos de inscripción, fechas del
                examen o convalidaciones, contáctanos por nuestros canales
                oficiales.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${INSTITUTION_CONTACT.phoneRaw}`}
                  className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2"
                >
                  <IconPhone className="w-3.5 h-3.5" />
                  <span>Llamar a Informes ({INSTITUTION_CONTACT.phone})</span>
                </a>
                <a
                  href={INSTITUTION_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold py-2.5 px-5 rounded-lg transition-colors"
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
