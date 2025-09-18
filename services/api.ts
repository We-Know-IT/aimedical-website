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
    id: 1,
    title: "Dermalyser has been evaluated in an independent clinical study run across 37 primary care facilities in Sweden.",
    ingress: "A comprehensive clinical validation study demonstrating Dermalyser's diagnostic precision and usability in primary care settings.",
    content: "The study's primary objective was to determine the diagnostic precision of the AI-based medical device Dermalyser by answering at which level Dermalyser can identify melanomas among cutaneous lesions assessed in clinical use due to any degree of malignancy suspicion.\n\nThe primary endpoint was measured by testing if Dermalyser gives correct results as compared with the final diagnosis of the lesion analysis (the final classification by histopathology (PAD) and/or Dermatologist assessment) in at least a certain proportion of the analyses.\n\nIn addition, one of the secondary objectives was to evaluate the usability and applicability in the clinical practice of Dermalyser by medical professionals and to gain an increased knowledge and understanding of how digital tools enhanced by AI can assist physicians with the proper support for an earlier diagnosis of melanoma. Towards this goal, users were asked to rate Dermalyser via a series of questions, including a System Usability Scale.\n\n## Study details\n\n250 subjects from 37 primary care centres in Sweden.\n\n- Patients ≥18 years.\n- Patients attending a primary care facility with at least 1 suspicious skin lesion.\n- Willingness and ability to provide informed consent.\n\n## Summary of results\n\nThe study demonstrates an AUC of 0.96, and after threshold calibration, the result from the clinical investigation demonstrates an AI performance of 95% sensitivity and 80% specificity. The fast response/outcome from Dermalyser compared to the time to the diagnosis from dermatologist and PAD combined with the app safety profile and high sensitivity, indicates that Dermalyser can have a significant positive impact on the early detection and diagnosis of cutaneous malignant melanoma.\n\nNo adverse events were reported. To read further details of the study, visit: [https://clinicaltrials.gov/](https://clinicaltrials.gov/)\n\nFor any questions about the study or to learn more about Dermalyser, please [contact us](/contact).",
    updatedAt: "2025-01-04T10:00:00.000Z",
    publishedAt: "2025-07-04T10:00:00.000Z",
    headerImage: {
      alternativeText: "Clinical study header image",
      width: 1200,
      height: 600,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    listingImage: {
      alternativeText: "Clinical study listing image",
      width: 400,
      height: 300,
      url: "/images/clinical-validation/doctor_holding_dermalyser.jpg"
    },
    author: "Clinical Research Team",
    postType: "clinical-studies" as const,
    seo: {
      id: 1,
      metaTitle: "Clinical Study: Dermalyser Validation Across 37 Primary Care Facilities",
      metaDescription: "Independent clinical study evaluating Dermalyser's diagnostic precision and usability across 37 primary care facilities in Sweden.",
      keywords: "clinical study, dermalyser, melanoma detection, primary care, AI medical device",
      preventIndexing: false
    },
    slug: "dermalyser-clinical-study-37-facilities-sweden"
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
