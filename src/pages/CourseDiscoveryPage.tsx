import Hero from "../components/courseDiscovery/Hero";
import PathCard from "../components/courseDiscovery/PathCard";
import ValueSection from "../components/courseDiscovery/ValueSelection";
import { Nav } from "../components/courses/CoursesTopNav";
import BetterFooter from "../components/Footer";

export default function CourseDiscoveryPage() {
  return (
    <div className="bg-background pt-xl text-on-surface selection:bg-primary/30">
      <Nav />
      <main className="min-h-screen">
        <Hero />

        {/* Category Grid */}
        <section className="px-margin py-lg max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <PathCard
              title="Beginner Alchemy"
              age="AGES 8-12"
              icon="auto_fix_high"
              iconColor="text-secondary"
              buttonClass="group-hover:bg-secondary group-hover:text-on-secondary neon-glow-blue"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBB3E41_gA-LgHyRdtK4dEsbBN2dkHV8fNq0o-MRub62dQWCVGzj3XsQtFk1gG_4XnfGF3c-Ria3h7z3chD73n66Zvo25K9huDQSy6WrHqoT-tnVaKvXVRhZ-kEgNcgWmla78Tnq2gJchym3GKmWEPp_LsIAK1RUA4HBSChe0UVsSuM-Te5xbLE6nx12RQZWNCZY8dGKvbWnnPbjrqbGKRagX_g642Bc75wOj9DOShfLRQiqZFqICOHdb1H8QtegJqRgZPyX0Ro07I"
              description="Ignite a lifelong passion for logic. Kids learn to weave spells with code."
            />

            <PathCard
              title="Code Transmutation"
              age="AGES 13-17"
              icon="terminal"
              iconColor="text-primary"
              buttonClass="group-hover:bg-primary group-hover:text-on-primary neon-glow-pink"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuByXNltNgRfaxRKs8FgbGqjj0mdOmgeCM_2HohmtBSA9AnJC489x0bkFKC8XE0JVAnTkzGiLaXhIGQnuWRUMSsTJH3vxWVZ8igWHksG_6acxKbM7TMLC8j1myM4M4TU20XD8tJpJtG42v_Mzz2R505I2Z2hiVU7Jr1yGdd8xJL32G878aHOLu9PV3M3PtEPvwWRcYaV3tPS1NK4iE27paTOuWHXgA7Qg62GLCYG4Z6eT1FTARudc9uY3fjYCGeBOSktzgTosC1FgTY"
              description="Master Python and JavaScript to build complex applications and AI models."
            />

            <PathCard
              title="Professional Mastery"
              age="ADULTS"
              icon="workspace_premium"
              iconColor="text-tertiary"
              buttonClass="group-hover:bg-tertiary group-hover:text-on-tertiary"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDg6BMJ2_PDFGEAhctfMiw7NslgV7u1oFPjd4K8yAoCnFVMgPTJlIo5EL0vJilvGJs6Iet1w4OBVOVPXqYLOCJcrK4j8C1JpJCTFOZz_ClTOHGktompojpICvM4Lw24uTf_KYxPl91MxAztMTubRVPBg3oz0XYlsp5c4ccJPUY4p0Rp8WK_mYSEFXepd9QLJDsxhforp4DbR1tc_2WeNutoSrk5xE_xVpHjojubbxP515Q61xpWXmR8mhyGom5kfJf76NIBorPZxRc"
              description="Upskill into Data Science, Full-Stack Architecture, or Cybersecurity."
            />
          </div>
        </section>

        <ValueSection />
      </main>

      <BetterFooter />
    </div>
  );
}
