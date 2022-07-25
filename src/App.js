import "./App.css";
import Cart from "./components/Cart";

function App() {
  
  // Subscription details
  const subPlan = [

    // "FREE subscription"
    {
      title: {
        name: "FREE",
      },
      price: {
        price: "$0",
        duration: "month",
      },
      noOfUsers: "Single User",
      storage: {
        capacity: "5GB",
      },
      unlimited_Public_Projects: {
        title: "Unlimited Public Projects",
        availability: true,
      },
      community_Access: {
        title: "Community Access",
        availability: true,
      },
      privateProjects: {
        title: "Unlimited Private Projects",
        availability: false,
      },
      support: {
        title: "Dedicated Phone Support",
        availability: false,
      },
      subDomain: {
        title: "Free Subdomain",
        availability: false,
      },
      statusReport: {
        title: "Monthly Status Report",
        availability: false,
      },
    },

    // "PLUS subscription"
    {
      title: {
        name: "PLUS",
      },
      price: {
        price: "$9",
        duration: "month",
      },
      noOfUsers: "5 Users",
      storage: {
        capacity: "50GB",
      },
      unlimited_Public_Projects: {
        title: "Unlimited Public Projects",
        availability: true,
      },
      community_Access: {
        title: "Community Access",
        availability: true,
      },
      privateProjects: {
        title: "Unlimited Private Projects",
        availability: true,
      },
      support: {
        title: "Dedicated Phone Support",
        availability: true,
      },
      subDomain: {
        title: "Free Subdomain",
        availability: true,
      },
      statusReport: {
        title: "Monthly Status Report",
        availability: false,
      },
    },

    // "PRO subscription"
    {
      title: {
        name: "PRO",
      },
      price: {
        price: "$49",
        duration: "month",
      },
      noOfUsers: "Unlimited Users",
      storage: {
        capacity: "150GB",
      },
      unlimited_Public_Projects: {
        title: "Unlimited Public Projects",
        availability: true,
      },
      community_Access: {
        title: "Community Access",
        availability: true,
      },
      privateProjects: {
        title: "Unlimited Private Projects",
        availability: true,
      },
      support: {
        title: "Dedicated Phone Support",
        availability: true,
      },
      subDomain: {
        title: "Free Subdomain",
        availability: true,
      },
      statusReport: {
        title: "Monthly Status Report",
        availability: true,
      },
    },
  ];

  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">


            {/* creating price cart for subcription types */}

            {subPlan.map((data) => {
              return <Cart plans={data}></Cart>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
