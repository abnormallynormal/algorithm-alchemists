import type { Form } from "./types/form";

interface FormProp {
  form?: Form;
}

export default function SignupForm({ form }: FormProp) {
  return (
    <main className="relative flex-grow flex items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-secondary-container/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-xl">
        <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary-container/30 rounded-tr-3xl hidden md:block"></div>
        <div className="glass-card rounded-xl p-md md:p-lg shadow-2xl overflow-hidden border-t border-white/10">
          <div className="mb-xl text-center md:text-left">
            <h1 className="font-h2 text-h2 text-white mb-base">
              {form ? form.title : "test"}
            </h1>
            <p className="font-body-lg text-on-surface-variant">
              {form ? form.description : "test"}
              {/* <span className="text-primary-container font-semibold">
                creativity
              </span> */}
            </p>
          </div>
          <form className="space-y-md">
            {/* FORM */}
            {/* {form.pages.map((page) => return <Page)} */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-transparent rounded-xl py-3 px-4 text-on-surface placeholder:text-slate-500 focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/50 transition-all outline-none font-body-md"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-transparent rounded-xl py-3 px-4 text-on-surface placeholder:text-slate-500 focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/50 transition-all outline-none font-body-md"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-transparent rounded-xl py-3 px-4 text-on-surface placeholder:text-slate-500 focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/50 transition-all outline-none font-body-md"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-transparent rounded-xl py-3 px-4 text-on-surface placeholder:text-slate-500 focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/50 transition-all outline-none font-body-md"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center pt-base">
              <input
                className="rounded bg-surface-container-highest border-none text-secondary-container focus:ring-offset-surface"
                id="terms"
                type="checkbox"
              />
              <label
                className="gap-sm font-body-md text-sm text-on-surface-variant"
                htmlFor="terms"
              >
                I agree to the
                <a className="text-white hover:underline" href="#">
                  Terms of Alchemy
                </a>
                and
                <a className="text-white hover:underline" href="#">
                  Privacy Logic
                </a>
                .
              </label>
            </div>
            <button
              className="w-full bg-secondary-container hover:bg-[#2563EB] text-white font-h3 py-4 rounded-xl shadow-lg shadow-secondary-container/20 transition-all active:scale-[0.98] mt-base"
              type="submit"
            >
              Sign Up Now
            </button>
          </form>
        </div>
        <div className="mt-md text-center">
          <p className="text-xs font-label-caps text-on-surface-variant opacity-50">
            © 2026 ALGORITHM ALCHEMISTS
          </p>
        </div>
      </div>
    </main>
  );
}
