import { useParams } from "react-router";
import { Nav } from "../components/courses/CoursesTopNav";
import FormHeader from "../components/form/FormHeader";
import Footer from "../components/Footer";
import QuestionBox from "../components/form/Question";
import SelectQuestion from "../components/form/SelectQuestion";
import type { Form } from "../types/form/form";
import { getFormById } from "../database/utils";

export default function CourseFormPage() {
  const params = useParams();
  const formId = params.formId;

  const form: Form | undefined = formId ? getFormById(formId) : undefined;

  if (!form) {
    return <div className="p-10 text-white">Form not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0b081a] text-[#d4e4fa] font-['Inter',_sans-serif]">
      <Nav />

      <main className="flex-grow pt-32 pb-20 px-6 flex justify-center items-start">
        <div className="max-w-4xl w-full">
          <FormHeader header={form.title} description={form.description} />

          <div className="glass-panel rounded-xl p-md md:p-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 alchemy-gradient"></div>

            <form className="space-y-lg">
              {form.pages.map((page) => (
                <div key={page.page_number} className="space-y-6">
                  {page.header && (
                    <h2 className="text-lg font-semibold text-on-surface">
                      {page.header}
                    </h2>
                  )}

                  {page.questions.map((question, idx) => {
                    if (question.type === "select") {
                      return <SelectQuestion key={idx} question={question} />;
                    }

                    return <QuestionBox key={idx} question={question} />;
                  })}
                </div>
              ))}

              <div className="pt-8 flex flex-col md:flex-row gap-4 items-center justify-end">
                <button
                  className="w-full md:w-auto px-8 py-3 rounded-xl border border-white/20 text-on-surface-variant font-semibold hover:bg-white/5 transition-all active:scale-95"
                  type="button"
                >
                  Cancel
                </button>

                <button
                  className="w-full md:w-auto px-12 py-3 rounded-xl bg-secondary-container text-white font-bold neon-glow-blue transition-all active:scale-95 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Submit
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
