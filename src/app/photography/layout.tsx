import Gallery from "@/components/Gallery"
import { GalleryContextProvider, useGalleryContext } from "@/contexts/gallery.context"

const PhotographyPage = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <GalleryContextProvider>
            {children}
            <Gallery />
        </GalleryContextProvider>
    )
}
export default PhotographyPage