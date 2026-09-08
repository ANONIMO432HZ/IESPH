import { TESTIMONIALS } from "@/data/testimonials"

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-20 bg-slate-50 border-b border-slate-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Comunidad y Egresados
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Experiencias de Nuestros Estudiantes y Egresados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Testimonios reales de jóvenes que transformaron su vocación en
            carreras técnicas con impacto productivo en la región.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                  <span className="text-amber-600 font-serif text-2xl leading-none">
                    “
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {t.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {t.name}
                  </h4>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">
                    {t.program}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
