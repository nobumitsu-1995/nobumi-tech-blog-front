import Script from "next/script";

const GoogleAnalytics = () => (
	<>
		<Script
			defer
			src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
			strategy="afterInteractive"
		/>
		<Script id="ga" defer strategy="afterInteractive">
			{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());    
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}');
      `}
		</Script>
	</>
);

export default GoogleAnalytics;
