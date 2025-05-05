import React from 'react'
import PricingCards from './Pricing_Cards/PricingCards'

function MonthlyComponent() {
  return (
    <div className='flex flex-row gap-4 transition-transform duration-300'>
      <PricingCards 
        text={"Basic plan"}
        price = {"$99.00/ month"}
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
        price = {"$159.00/ month"}
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
        price = {"$399.00/ month"}
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

export default MonthlyComponent