import React from 'react'
import { GalleryVerticalEnd } from 'lucide-react'
import { WaitListForm } from '@/components/waitlist-form'

const page = () => {

    return (
        <div className="bg-muted flex min-h-svh h-auto flex-col items-center justify-center gap-6 p-6 md:p-10 overflow-auto scrollbar-hide">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    TubeOut
                </a>
                <WaitListForm />
            </div>
        </div>
    )
}

export default page
