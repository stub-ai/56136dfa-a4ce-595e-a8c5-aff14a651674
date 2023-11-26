import React from 'react';

interface Plan {
  name: string;
  price: number;
  features: string[];
}

interface PricingProps {
  plans: Plan[];
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {plans.map((plan, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{plan.name}</div>
            <p className="text-gray-700 text-base">
              ${plan.price} / month
            </p>
            <ul className="list-disc list-inside">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;