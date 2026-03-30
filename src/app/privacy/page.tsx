"use client";




import { GenericPage } from "@/components/GenericPage"

const sections = [
  {
    title: "Your IP Address",
    content: "Each time that you visit the Site, our web server automatically recognizes your IP address and the web page from which you came. Your IP address is used to help identify you and to gather broad demographic information about you. We also use your IP address to help diagnose problems with our servers, to administer the Site and to better serve you in using the products, services and other features associated with the Site."
  },
  {
    title: "Cookies and Action Tags",
    content: "Cookies: The first time that a user provides an e-mail address in connection with his/her activities at the Site, we assign an identification number to that e-mail address and deploy a cookie to the applicable user’s PC.\n\nAction Tags, Web Beacons and other Data Collection Methods: An action tag or a web-beacon is a method used to track responses or actions by visitors who view certain advertisements or other information on the Site."
  },
  {
    title: "Personal Information That We Collect From You",
    content: "By registering with, or providing personal information to, the Site, users allow us and our affiliates to make their personally identifiable information available to third parties in accordance with the terms of this Privacy Policy. For the purposes of this Privacy Policy, Personal Information shall mean individually identifiable information from or about an individual."
  },
  {
    title: "How We Use Demographic Information and Aggregate Data",
    content: "We use demographic information to tailor the Site to the interests of our users. Demographic information is shared with third party advertisers so that they can tailor their advertisements to the appropriate audience."
  },
  {
    title: "Our Security Precautions",
    content: "We endeavor to safeguard and protect our user’s information. The privacy of your Personal Information is very important to us. The servers that we store personally identifiable information in are kept in a secure physical environment."
  },
  {
    title: "Contacting Us",
    content: "If you have any questions about this Privacy Policy, please contact our privacy team."
  }
]

export default function PrivacyPolicyPage() {
  return (
    <GenericPage 
      title="Privacy Policy"
      effectiveDate="08-06-2019"
      sections={sections}
    />
  )
}
