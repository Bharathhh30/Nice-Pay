import React from 'react'
import PricingCards from './Pricing_Cards/PricingCards'

function YearlyComponent() {
  return (
    <div className='flex flex-row gap-4'>
      <PricingCards 
        text={"Basic plan"}
        price = {"$1000.00/ year"}
        sentence={"Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease"}
        Features={
          [
            "Unlimited Invoices",
            "Next-Day Payments",
            "Secure Payment Gateway",
            "Basic Analytics and Reporting",
            "Email Support"
          ]
        }
      />

      <PricingCards 
        text={"Pro plan"}
        price = {"$1700.00/ year"}
        sentence={"Designed for growing businesses, the Basic Plan expands on our Starter package with additional features and integrations."}
        Features={
          [
            "Unlimited Invoices",
            "Next-Day Payments",
            "Secure Payment Gateway",
            "Basic Analytics and Reporting",
            "Email Support"
          ]
        }
      />

      <PricingCards 
        text={"Enterprise plan"}
        price = {"$4000.00/ year"}
        sentence={"Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability."}
        Features={
          [
            "Unlimited Invoices",
            "Next-Day Payments",
            "Secure Payment Gateway",
            "Basic Analytics and Reporting",
            "Email Support"
          ]
        }
      />
    </div>
  )
}

export default YearlyComponent