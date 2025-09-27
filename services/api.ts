import {
  Post,
  PostsRequestParams,
  PostsResponse,
  ServiceResponse,
} from "./types";
import { strapi } from "../strapi/strapi";
import {
  getStrapiErrorResponse,
  parseStrapiMetaData,
  parseStrapiPostData,
} from "./strapi.utils";

// Mock data for development
const mockClinicalStudies = [
  {
    id: 3,
    title: "Long-term Performance Assessment of Dermalyser in Clinical Practice",
    ingress: "A longitudinal study examining Dermalyser's sustained performance and clinical utility over extended periods of use.",
    content: "This longitudinal clinical study was conducted to assess Dermalyser's long-term performance and clinical utility in real-world healthcare settings. The study tracked diagnostic accuracy, user satisfaction, and clinical outcomes over a 12-month period across multiple healthcare facilities.\n\nKey objectives included evaluating sustained diagnostic performance, assessing learning curve effects, measuring user confidence evolution, and analyzing clinical workflow integration over time. The study also examined maintenance requirements and system reliability under continuous clinical use.\n\nFindings revealed consistent diagnostic accuracy throughout the study period, with improved user confidence and streamlined clinical workflows. The study provides valuable insights into Dermalyser's long-term clinical value and sustainability in healthcare practice.",
    updatedAt: "2025-02-01T10:00:00.000Z",
    publishedAt: "2025-09-01T10:00:00.000Z",
    headerImage: {
      alternativeText: "Clinical study 1 header image",
      width: 1200,
      height: 600,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    listingImage: {
      alternativeText: "Clinical study 1 listing image",
      width: 400,
      height: 300,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    author: "Clinical Research Team",
    postType: "clinical-studies" as const,
    seo: {
      id: 1,
      metaTitle: "Clinical Study 1: Long-term Performance Assessment of Dermalyser",
      metaDescription: "Longitudinal study examining Dermalyser's sustained performance and clinical utility over extended periods of use in real-world healthcare settings.",
      keywords: "clinical study, dermalyser, long-term performance, clinical utility, AI medical device",
      preventIndexing: false
    },
    slug: "clinical-study-1-long-term-performance-assessment"
  },
  {
    id: 2,
    title: "Multi-Center Validation of Dermalyser Diagnostic Accuracy",
    ingress: "A multi-center clinical study evaluating Dermalyser's performance across diverse healthcare settings and patient populations.",
    content: "This comprehensive multi-center study was designed to validate Dermalyser's diagnostic accuracy across different healthcare environments and patient demographics. The study involved multiple medical centers and included a diverse range of skin lesions to ensure robust validation of the AI-based diagnostic system.\n\nThe primary endpoints focused on sensitivity, specificity, and overall diagnostic accuracy compared to histopathological analysis and expert dermatologist assessment. Secondary endpoints included evaluation of inter-observer agreement, diagnostic confidence levels, and clinical workflow integration.\n\nResults demonstrated consistent high performance across all participating centers, with maintained diagnostic accuracy regardless of lesion complexity or patient demographics. The study provides strong evidence for Dermalyser's reliability as a diagnostic aid in clinical practice.",
    updatedAt: "2025-01-15T10:00:00.000Z",
    publishedAt: "2025-08-15T10:00:00.000Z",
    headerImage: {
      alternativeText: "Clinical study 2 header image",
      width: 1200,
      height: 600,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    listingImage: {
      alternativeText: "Clinical study 2 listing image",
      width: 400,
      height: 300,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    author: "Clinical Research Team",
    postType: "clinical-studies" as const,
    seo: {
      id: 2,
      metaTitle: "Clinical Study 2: Multi-Center Validation of Dermalyser",
      metaDescription: "Multi-center clinical study validating Dermalyser's diagnostic accuracy across diverse healthcare settings and patient populations.",
      keywords: "clinical study, dermalyser, multi-center validation, diagnostic accuracy, AI medical device",
      preventIndexing: false
    },
    slug: "clinical-study-2-multi-center-validation-dermalyser"
  },
  {
    id: 1,
    title: "Dermalyser Evaluation Across 37 Primary Care Facilities in Sweden",
    ingress: "A comprehensive clinical validation study demonstrating Dermalyser's diagnostic precision and usability in primary care settings.",
    content: "The study's primary objective was to determine the diagnostic precision of the AI-based medical device Dermalyser by answering at which level Dermalyser can identify melanomas among cutaneous lesions assessed in clinical use due to any degree of malignancy suspicion.\n\nThe primary endpoint was measured by testing if Dermalyser gives correct results as compared with the final diagnosis of the lesion analysis (the final classification by histopathology (PAD) and/or Dermatologist assessment) in at least a certain proportion of the analyses.\n\nIn addition, one of the secondary objectives was to evaluate the usability and applicability in the clinical practice of Dermalyser by medical professionals and to gain an increased knowledge and understanding of how digital tools enhanced by AI can assist physicians with the proper support for an earlier diagnosis of melanoma. Towards this goal, users were asked to rate Dermalyser via a series of questions, including a System Usability Scale.\n\n## Study details\n\n250 subjects from 37 primary care centres in Sweden.\n\n- Patients ≥18 years.\n- Patients attending a primary care facility with at least 1 suspicious skin lesion.\n- Willingness and ability to provide informed consent.\n\n## Summary of results\n\nThe study demonstrates an AUC of 0.96, and after threshold calibration, the result from the clinical investigation demonstrates an AI performance of 95% sensitivity and 80% specificity. The fast response/outcome from Dermalyser compared to the time to the diagnosis from dermatologist and PAD combined with the app safety profile and high sensitivity, indicates that Dermalyser can have a significant positive impact on the early detection and diagnosis of cutaneous malignant melanoma.\n\nNo adverse events were reported. To read further details of the study, visit: [https://clinicaltrials.gov/](https://clinicaltrials.gov/)\n\nFor any questions about the study or to learn more about Dermalyser, please [contact us](/contact).",
    updatedAt: "2025-01-04T10:00:00.000Z",
    publishedAt: "2025-07-04T10:00:00.000Z",
    headerImage: {
      alternativeText: "Clinical study 3 header image",
      width: 1200,
      height: 600,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    listingImage: {
      alternativeText: "Clinical study 3 listing image",
      width: 400,
      height: 300,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    author: "Clinical Research Team",
    postType: "clinical-studies" as const,
    seo: {
      id: 3,
      metaTitle: "Clinical Study 3: Dermalyser Validation Across 37 Primary Care Facilities",
      metaDescription: "Independent clinical study evaluating Dermalyser's diagnostic precision and usability across 37 primary care facilities in Sweden.",
      keywords: "clinical study, dermalyser, melanoma detection, primary care, AI medical device",
      preventIndexing: false
    },
    slug: "clinical-study-3-dermalyser-evaluation-37-facilities-sweden"
  }
];

function getMockClinicalStudies(): Post[] {
  return mockClinicalStudies;
}

async function getPosts({
  sort = "publishedAt:desc",
  pagination,
  filterBy = ["blog", "news", "research", "clinical-studies"],
}: PostsRequestParams = {}): Promise<ServiceResponse<PostsResponse>> {
  // If only clinical studies are requested, return only mock data
  if (filterBy.length === 1 && filterBy.includes("clinical-studies")) {
    const mockStudies = getMockClinicalStudies();
    return {
      data: {
        posts: mockStudies,
        meta: {
          pagination: {
            start: 0,
            limit: mockStudies.length,
            total: mockStudies.length
          }
        },
      },
      error: null,
    };
  }

  const strapiTypes = filterBy.filter(type => type !== "clinical-studies");
  const options = {
    sort,
    populate: ["listingImage"],
    pagination,
    filters: strapiTypes.length > 0 ? {
      postType: strapiTypes,
    } : {},
  };

  try {
    const response = await strapi.find("posts", options);
    let posts: Post[] = [];
    
    if (Array.isArray(response.data)) {
      posts = response.data.map(parseStrapiPostData);
    }
    
    // Add mock clinical studies if requested
    if (filterBy.includes("clinical-studies")) {
      const mockStudies = getMockClinicalStudies();
      posts = [...posts, ...mockStudies];
    }
    
    // Sort combined results
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    return {
      data: {
        posts,
        meta: parseStrapiMetaData(response.meta),
      },
      error: null,
    };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

async function getPostById(id: number): Promise<ServiceResponse<Post>> {
  try {
    const response = await strapi.findOne("posts", id, {
      populate: ["headerImage", "seo", "seo.shareImage"],
    });
    return { data: parseStrapiPostData(response.data), error: null };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

async function getPostBySlug(slug: string): Promise<ServiceResponse<Post>> {
  try {
    // First check mock clinical studies
    const mockStudies = getMockClinicalStudies();
    const mockStudy = mockStudies.find(study => study.slug === slug);
    if (mockStudy) {
      return { data: mockStudy, error: null };
    }
    
    // Then check Strapi
    const response = await strapi.find("posts", {
      filters: { slug },
      populate: ["headerImage", "seo", "seo.shareImage"],
    });
    if (Array.isArray(response.data) && response.data.length > 0)
      return { data: parseStrapiPostData(response.data[0]), error: null };
    return { data: null, error: `Could not find the post with slug: ${slug}` };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

function setAbortSignal(signal: AbortSignal) {
  strapi.axios.defaults.signal = signal;
}

export { getPosts, getPostById, setAbortSignal, getPostBySlug };
