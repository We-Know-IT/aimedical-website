import Head from "next/head";
import React from "react";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
import Image from "next/image";
import Link from "next/link";

function StudyDetails() {
  return (
    <>
      <h3 className="mt-6 mb-2 text-xl font-semibold text-primary lg:text-2xl">
        Study Details
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-bold">Number of Subjects</h4>
          <p className="text-lg leading-7">
            241 subjects from 37 primary care centres in Sweden Diagnosis
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold leading-7">Eligibility Criteria</h4>
          <ul className="ml-4 list-disc gap-6 text-lg font-normal leading-7">
            <li>Patients ≥18 years</li>
            <li>
              Patients attending a primary care facility with at least 1
              suspicious skin lesion where MM cannot be ruled out.
            </li>
            <li>Willingness and ability to provide informed consent.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function StudyOverview() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
        Clinical Study Overview
      </h2>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 text-lg font-normal leading-7 text-on-bg-primary">
          <p>
            The study&apos;s primary objective was to determine the diagnostic
            precision of the AI-based medical device Dermalyser by answering at
            which level Dermalyser can identify melanomas among cutaneous
            lesions assessed in clinical use due to any degree of malignancy
            suspicion.
          </p>
          <p>
            The primary endpoint was measured by testing if Dermalyser gives
            correct results as compared with the final diagnosis of the lesion
            analysis (the final classification by histopathology (PAD) and/or
            Dermatologist assessment) in at least a certain proportion (π) of
            the analyses.
          </p>
          <p>
            A secondary objective was to evaluate the usability and
            applicability in the clinical practice of Dermalyser by medical
            professionals and to gain an increased knowledge and understanding
            of how digital tools enhanced by AI can assist physicians with the
            proper support for an earlier diagnosis of melanoma. Towards this
            goal, users were asked to rate Dermalyser via a series of questions,
            including a System Usability Scale.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={"/images/clinical-validation/doctor_holding_dermalyser.jpg"}
            alt={"Doctor showing dermalyser."}
            width={2048}
            height={1365}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

function StudySummary() {
  return (
    <>
      <h3 className="mt-6 mb-2 text-xl font-semibold text-primary lg:text-2xl">
        Summary of Results
      </h3>
      <div className="flex flex-col gap-6 text-lg font-normal leading-7">
        <p>
          The study demonstrates an AUC of 0.96, and after threshold
          calibration, the result from the clinical investigation demonstrates
          an AI performance of 95% sensitivity and 85.5% specificity.
        </p>
        <p>
          To read further details of the study, visit:
          <br />
          <a
            href="https://clinicaltrials.gov/ct2/show/NCT05172232?term=AI&cond=Melanoma&draw=2&rank=1"
            className="text-primary hover:text-primary-hover">
            https://clinicaltrials.gov/ct2/show/NCT05172232?term=AI&cond=Melanoma&draw=2&rank=1
          </a>
        </p>
        <p>
          For any questions about the study or to learn more about Dermalyser,
          please{" "}
          <Link
            href="#contact"
            className="text-primary hover:text-primary-hover">
            contact us
          </Link>
          .
        </p>
      </div>
    </>
  );
}

export default function ClinicalValidation() {
  return (
    <>
      <Head>
        <title>AI Medical | Clinical Validation</title>
        <MetaTags
          image="/images/clinical-validation/header.jpg"
          title="Clinical Validation"
          description="Dermalyser has been evaluated in an independent clinical study run across 37 primary care facilities in Sweden"
        />
      </Head>
      <Header
        imageUrl="/images/clinical-validation/header.jpg"
        title="Clinical Validation"
        imageAlt="Image of a doctor using dermalyser"
        text="Dermalyser has been evaluated in an independent clinical study run across 37 primary care facilities in Sweden"
      />
      <main className="container my-24">
        <div>
          <StudyOverview />
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-12">
            <div className="flex-1">
              <StudyDetails />
            </div>
            <div className="flex-1">
              <StudySummary />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
