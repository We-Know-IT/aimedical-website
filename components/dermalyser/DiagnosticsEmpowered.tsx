import Typography from "../common/Typography";

export default function DiagnosticsEmpowered() {
  return (
    <section className="bg-background-secondary pt-10 pb-20 lg:pb-24">
      <div className="container flex max-w-xl flex-col gap-6 lg:container">
        <Typography variant="h2" className="sm:self-center">
          Empowered with <strong>AI</strong>
        </Typography>
        <Typography
          variant="p"
          className="text-on-bg-primary sm:mx-auto lg:max-w-4xl">
          Dermalyser is a stand-alone Medical Device Software (MDSW) application empowered with Artificial Intelligence (AI). It functions as a decision-support system for medical professionals when assessing suspected lesions for Melanoma. <br /> <br />
          The application is developed and trained on quality-controlled dermatoscopic images of skin lesions, together with associated patient data.
        </Typography>
      </div>
    </section>
  );
}
