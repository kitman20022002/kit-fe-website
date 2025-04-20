import { getPostSiteMap } from "../api/kitmanyiuapis";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://skills.kitmanyiu.com/</loc>
       <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
     </url>
    <url>
        <loc>https://skills.kitmanyiu.com/devops</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    </url>
    <url>
        <loc>https://skills.kitmanyiu.com/back-end</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    </url>
    <url>
        <loc>https://skills.kitmanyiu.com/front-end</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    </url>
    <url>
        <loc>https://skills.kitmanyiu.com/others</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    </url>
     ${posts
       .map((url) => {
         return `
       <url>
           <loc>${`https://skills.kitmanyiu.com/${url}`}</loc>
           <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await getPostSiteMap();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(request.data);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
