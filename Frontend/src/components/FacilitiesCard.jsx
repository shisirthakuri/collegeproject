import React from 'react'
import { Bell, CheckCircle2 } from 'lucide-react'
const FacilitiesCard = ({arr}) => {
  return (
      <div className=' flex-col flex  lg:flex-row lg:gap-x-10 lg:pl-30 '>
        {
          arr.map((feature, index) => (<div
            className="flex flex-col lg:w-100 items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm mt-5"
            key={index}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-center text-muted-foreground">{feature.description}</p>
          </div>))
        }
        </div>
  )
}

export default FacilitiesCard
