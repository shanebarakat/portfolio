import GlobeCanvas from './globe/GlobeCanvas';
import { GLOBE_VARIATIONS } from './globe/variations';

const GlobePickerPage: React.FC = () => (
  <div className="min-h-screen w-full bg-stone-50 font-serif font-medium text-zinc-900 antialiased">
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <a
        href="/"
        className="mb-8 inline-block text-base text-zinc-500 hover:text-zinc-900 hover:underline"
      >
        ← Back
      </a>

      <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-900">
        Monochrome globe picker
      </h1>
      <p className="mb-12 max-w-2xl text-[16px] leading-relaxed text-zinc-600">
        Ten black-and-white globe techniques — dots, crosshatch, moiré,
        dither, etching, and more. Pick one and tell me the name.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {GLOBE_VARIATIONS.map((variation, index) => (
          <article
            key={variation.id}
            className="rounded-sm border border-zinc-200 bg-white p-6"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-400">#{index + 1}</p>
                <h2 className="text-xl font-bold text-zinc-900">
                  {variation.name}
                </h2>
                <p className="mt-1 font-mono text-xs text-zinc-400">
                  {variation.id}
                </p>
              </div>
              <GlobeCanvas
                variation={variation}
                size={96}
                className="shrink-0 rounded-sm"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-zinc-600">
              {variation.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  </div>
);

export default GlobePickerPage;