import { IconEyeSearch, IconFolderCode, IconSearchOff } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

export function EmptyDemo() {
    return (
        <Empty className="flex items-center mt-10 md:mt-0">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <IconEyeSearch />
                </EmptyMedia>
                <EmptyTitle>No Creators Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t searched any creators yet. Get started by looking
                    your first creators.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex gap-2">
                    <Button>Find Creators</Button>
                    <Button variant="outline">Import CSV</Button>
                </div>
            </EmptyContent>
            <Button
                variant="link"
                asChild
                className="text-muted-foreground text-[12px]"
                size="sm"
            >
                <a href="#">
                    Learn More <ArrowUpRightIcon />
                </a>
            </Button>
        </Empty>
    )
}
