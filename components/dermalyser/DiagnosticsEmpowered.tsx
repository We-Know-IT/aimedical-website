export default function DiagnosticsEmpowered() {
  return (
    <section className="bg-background-secondary py-24 lg:py-32">
      <div className="container flex max-w-xl flex-col gap-12 lg:container">
        <h2 className="text-center text-xl font-bold leading-6 text-primary lg:text-3xl lg:leading-10">
          Diagnostics empowered with AI
        </h2>
        <p className="mx-auto text-center text-lg font-medium leading-7 text-on-bg-primary lg:max-w-2xl">
          Dermalyser is a diagnostic decision support system empowered with
          advanced artificial intelligence. The primary function is to classify
          skin cancer such as malignant melanoma using image analysis combined
          with deep learning. <br /> <br />
          The artificial intelligence is developed and trained based on
          quality-controlled dermatoscopic images of patients’ skin lesions
          together with associated patient data.
        </p>
        <div className="mx-auto aspect-video w-full overflow-hidden rounded-lg shadow-lg lg:max-w-2xl">
          <iframe
            className="h-full w-full"
            title="Dermalyser User guide"
            src="https://player.vimeo.com/video/711636240?h=c1d894c848?dnt=true"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}
