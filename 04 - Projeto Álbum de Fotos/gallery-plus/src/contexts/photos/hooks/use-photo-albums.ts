import { toast } from "sonner";
import { api } from "../../../helpers/api";
import { useQueryClient } from "@tanstack/react-query";


export default function usePhotosAlbums() {

    async function managePhotoOnAlbum(photoId: string, albumsIds: string[]) {
        const queryClient = useQueryClient();

        try {
            await api.put(`/photos/${photoId}/albums`, {
                albumsIds
            });

            queryClient.invalidateQueries({queryKey: ["photo", photoId]});
            queryClient.invalidateQueries({queryKey: ["photos"]});

            toast.success("Álbums atualizados")
        } catch (error) {
            toast.error("Erro ao gerenciar álbuns da foto")
            throw error;
        }
    }

    return {
        managePhotoOnAlbum,
    }
}