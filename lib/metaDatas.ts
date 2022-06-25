export const url = process.env.NODE_ENV === "production" 
  ? "https://nobumi-tech-blog-front.vercel.app"
  : "http://localhost:3000";

export const topMetaData = {
  url: url
}

export const contactMetaData = {
  pageTitle: "Contact",
  url: `${url}/contact`,
}

export const privacyMetaData = {
  pageTitle: "Privacy",
  url: `${url}/privacy`,
}

export const profileMetaData = {
  pageTitle: "Profile",
  url: `${url}/profile`,
}

export const searchMetaData = {
  pageTitle: "Search",
  url: `${url}/search`,
}

export const resultMetaData = {
  pageTitle: "Search",
  url: `${url}/search`,
}

export const categoryMetaData = {
  pageTitle: "Category",
  url: url,
}
