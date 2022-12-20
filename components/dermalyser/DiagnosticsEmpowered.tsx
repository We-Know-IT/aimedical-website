export default function DiagnosticsEmpowered() {
  return (
    <section className="bg-background-secondary py-24 md:py-32">
      <div className="container gap-12 flex flex-col ">
        <h2 className="text-primary text-xl md:text-3xl font-bold text-center leading-6 md:leading-10">
          Diagnostics empowered with AI
        </h2>
        <p className="text-on-bg-primary text-lg font-normal text-center  leading-7 md:max-w-2xl mx-auto">
          Dermalyser is a diagnostic decision support system empowered with
          advanced artificial intelligence. The primary function is to classify
          skin cancer such as malignant melanoma using image analysis combined
          with deep learning. <br /> <br />
          The artificial intelligence is developed and trained based on
          quality-controlled dermatoscopic images of patients’ skin lesions
          together with associated patient data.
        </p>
        <div className="w-full md:max-w-2xl mx-auto aspect-video">
          <iframe
            className="w-full h-full shadow-md"
            title="Dermalyser User guide"
            src="https://player.vimeo.com/video/711636240?h=c1d894c848"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}
