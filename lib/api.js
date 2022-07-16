import { getImageSize } from 'next/dist/server/image-optimizer'

async function fetchFromContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    }

    return await fetch(fetchUrl, fetchOptions)
        .then(response => response.json())
        .catch(error => console.log(error))
}

function extractSectionLinks(fetchResponse) {
    const sectionLink = fetchResponse?.data?.sectionLinksCollection?.items[0]

    return {
        title: sectionLink?.title,
        links: sectionLink?.linksCollection?.items
    }
}

function extractSectionWork(fetchResponse) {
    const sectionWork = fetchResponse?.data?.sectionWorkCollection?.items[0]

    return {
        title: sectionWork?.title,
        projects: sectionWork?.projectsCollection?.items
    }
}

function extractProjects(fetchResponse) {
    return fetchResponse?.data?.projectCollection?.items
}

function extractProject(fetchResponse) {
    const project = fetchResponse?.data?.projectCollection?.items[0]

    return {
        title: project?.title,
        client: project?.client,
        link: project?.link,
        description: project?.description,
        technologies: project?.technologiesCollection?.items.map(technology => technology.title),
        images: project?.imagesCollection?.items,
        video: project?.video,
        videoAutoplay: project?.videoAutoplay
    }
}

export async function getSectionLinks() {
    const entries = await fetchFromContentful(
        `query {
            sectionLinksCollection(limit: 1) {
              items {
                title
                linksCollection {
                  items {
                    title
                    url
                  }
                }
              }
            }
          }`
    )

    return extractSectionLinks(entries)
  }

  export async function getSectionWork() {
    const entries = await fetchFromContentful(
        `query {
            sectionWorkCollection(limit: 1) {
                items {
                    title
                    projectsCollection(limit: 10) {
                        items {
                            title
                            slug
                            imagesCollection(limit: 1) {
                                items {
                                    contentType
                                    url
                                    description
                                }
                            }
                        }
                    }
                }
            }
        }`
    )

    return extractSectionWork(entries)
  }

  export async function getAllProjectsWithSlugs() {
    const entries = await fetchFromContentful(
        `query {
            projectCollection(where: { slug_exists: true }) {
                items {
                  slug
                }
              }
        }`
    )

    return extractProjects(entries)
  }
  
  export async function getProjectBySlug(slug) {
    const entry = await fetchFromContentful(
        `query {
            projectCollection(where: { slug: "${slug}" }, limit: 1) {
                items {
                    title
                    client
                    link
                    description
                    technologiesCollection {
                        items {
                            title
                        }
                    }
                    imagesCollection {
                        items {
                            contentType
                            url
                            width
                            height
                            description
                        }
                    }
                    video {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                    }
                    videoAutoplay
                }
            }
        }`
    )

    return extractProject(entry)
  }