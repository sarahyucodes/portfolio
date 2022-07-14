const query = `
    {
        linkCollection {
            items {
                title
                url
            }
        }
    }
`

export async function fetchLinks() {
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