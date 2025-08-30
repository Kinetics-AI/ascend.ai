import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



export function MenuDrawer() {
    return (
        <DrawerContent className="p-6 rounded-l-3xl">
            <DrawerTitle></DrawerTitle>
                <div className="w-full h-full flex flex-col justify-center">
                    TODO
                </div>
        </DrawerContent>
    )
}
