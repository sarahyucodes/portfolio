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

export async function getSectionLinks() {
    const sectionLink = await fetchFromContentful(
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

    return extractSectionLinks(sectionLink)
  }

  export async function getSectionWork() {
    const sectionWork = await fetchFromContentful(
        `query {
            sectionWorkCollection(limit: 1) {
                items {
                    title
                    projectsCollection(limit: 10) {
                        items {
                            title
                            imagesCollection(limit: 1) {
                                items {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }`
    )

    return extractSectionWork(sectionWork)
  }