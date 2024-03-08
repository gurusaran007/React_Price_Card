import React from 'react'
import Price from './Price'

function App() {

  const data = [{
     plan:"FREE",
     price:0,
     user:"Single User",
     isUser:true,
     storage:"5GB Storage",
     isStorage:true,
     publicProjects:"Unlimited Public Projects",
     isPublicProjects:true,
     communityAccess:"Community Access",
     isCommunityAccess:true,
     privateProjects:"Unlimited Private Projects",
     isPrivateProjects:false,
     phoneSupport: "Dedicated Phone Support",
     isPhoneSupport:false,
     subdomain:"Free Subdomain",
     isSubdomain:false,
     reports:"Monthly Status Reports",
     isReports:false
  },
  {
    plan:"PLUS",
     price:9,
     user:"5 User",
     isUser:true,
     storage:"50GB Storage",
     isStorage:true,
     publicProjects:"Unlimited Public Projects",
     isPublicProjects:true,
     communityAccess:"Community Access",
     isCommunityAccess:true,
     privateProjects:"Unlimited Private Projects",
     isPrivateProjects:true,
     phoneSupport: "Dedicated Phone Support",
     isPhoneSupport:true,
     subdomain:"Free Subdomain",
     isSubdomain:true,
     reports:"Monthly Status Reports",
     isReports:false
  },
     
  {
    plan:"PRO",
    price:49,
    user:" User",
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    phoneSupport: "Dedicated Phone Support",
    isPhoneSupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:true
  }
]

  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
         {
            data.map((e,i)=>{
              return <Price data={e} key={i}/>
            })
          }
            

           
          
  
            
          </div>
  
          
          

          

      </div>
    </section>
  </>
}

export default App